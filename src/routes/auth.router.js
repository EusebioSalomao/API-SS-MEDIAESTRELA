import {Router} from 'express'
const router = Router()
import {login, logiIn} from '../controlles/auth.controll.js'

router.get('/login', login)
router.post('/login', logiIn)

export default router