import {Router} from 'express'
import { homeFinancas } from '../controlles/financas.controll.js'
const router = Router()


router.get('/', homeFinancas)

export default router