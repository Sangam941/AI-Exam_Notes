import { NotesModel } from "../models/notes.model.js"
import { UserModel } from "../models/user.model.js"
import { generateContent } from "../services/Gemini.services.js"
import { promptBuilder } from "../utils/promptBuilder.js"

export const generateNotes = async(req, res)=>{
    try {
        const {topic, level, examType, revisionMode, diagram, charts} = req.body

        const user = await UserModel.findById(req.user?.userId)

        if(!user){
            return res.status(400).json({message: "user not found", success:false})
        }

        if(!topic){
            return res.status(400).json({message: "topic is required", success:false})
        }

        if(user.credits<10){
            user.isCreditAvailable = false
            await user.save()
            return res.status(400).json({message: "Insuffecient Credits", success:false})
        }

        const prompt = promptBuilder(topic, level, examType, revisionMode, diagram, charts)

        const aiResponse = await generateContent(prompt)
        console.log(aiResponse)

        const notes = await NotesModel.create({
            user: user._id,
            topic,
            level,
            examType,
            revisionMode,
            diagram,
            charts,
            content: aiResponse
        })

        user.credits -= 10

        if(user.credits<=0){
            user.isCreditAvailable = false
        }

        user.notes.push(notes._id)
        await user.save()

        return res.status(201).json({success:true, message: "notes generated successfully", data:aiResponse, creditLeft: user.credits, noteId:notes._id})
        

    } catch (error) {
        return res.status(500).json({message: `AI notes generator Error:: ${error}`, success:false})
    }
}