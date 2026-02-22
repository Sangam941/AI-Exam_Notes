import express from 'express'
import { isAuth } from '../middleware/isAuth.js'
import { currentUser } from '../controllers/user.controllers.js'

const router = express.Router()

router.get('/current-user', isAuth, currentUser)

export default router