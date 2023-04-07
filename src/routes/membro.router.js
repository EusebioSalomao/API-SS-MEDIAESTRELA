import express from 'express'
const router = express.Router();
import {membros, adMembro, adMembroSave, editMembro, detalhMembro, editMembroSave} from "../controlles/membro.controll.js"
import {validFildsAdM} from '../middlewares/membro.middware.js'

router.get('/', membros)
router.get('/adMembro', adMembro)
router.post('/adMembro',validFildsAdM, adMembroSave)
router.get('/detalhMembro', detalhMembro)
router.get('/detalhMembro/:id', detalhMembro)
router.get('/editMembro/:id', editMembro)
router.post('/editMembro/', validFildsAdM, editMembroSave)

export default router