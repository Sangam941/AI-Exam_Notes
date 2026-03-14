import express from 'express'
import { isAuth } from '../middleware/isAuth.js'
import { generateNotes } from '../controllers/generate.notes.js'

const router = express.Router()

router.post('/generate-notes', isAuth, generateNotes)

export default router