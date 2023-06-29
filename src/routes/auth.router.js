import {Router} from 'express'
const router = Router()
import {login, logiIn, deletar} from '../controlles/auth.controll.js'

router.get('/login', login)
router.post('/login', logiIn)
router.get('/detarUser/:id', deletar)

export default router