import express from 'express'
import { isAuth } from '../middleware/isAuth.js'
import { generateNotes, notesHistory } from '../controllers/generate.notes.js'

const router = express.Router()

router.post('/generate-notes', isAuth, generateNotes)
router.get('/all-notes', isAuth, notesHistory)

export default router