import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './connect/db.js'
import AuthRouter from './routes/auth.route.js'
import UserRouter from './routes/user.route.js'
import NotesRouter from './routes/notes.route.js'
import PDFRouter from './routes/pdf.router.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173","https://ai-exam-notes-mu.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
}))

const port = process.env.PORT || 5000


app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)
app.use('/api/notes', NotesRouter)
app.use('/api/pdf', PDFRouter)

app.listen(port, ()=>{
    console.log(`server running on port http://localhost:${port}`)
})