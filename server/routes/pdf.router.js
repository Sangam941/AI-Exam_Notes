import express from 'express'
import { isAuth } from '../middleware/isAuth.js'
import { downloadPdf } from '../controllers/pdf.controller.js'

const router = express.Router()

router.post("/download-pdf", isAuth, downloadPdf)

export default router