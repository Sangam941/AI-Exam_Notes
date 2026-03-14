import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    level: String,
    examType: String,

    revisionMode: {
        type:Boolean,
        default: false,
    },
    diagram: {
        type:Boolean,
        default: false,
    },
    chart: {
        type:Boolean,
        default: false,
    },

    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },

}, {timestamps:true})

export const NotesModel = mongoose.model("Notes", notesSchema)