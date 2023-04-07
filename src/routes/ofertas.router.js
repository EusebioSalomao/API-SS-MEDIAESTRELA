import express from 'express';
import { somarQuota } from '../controlles/financas.controll.js';
const router = express.Router();
import {quotas, adOferta, adOfertaSave} from '../controlles/ofertas.controll.js'

router.get("/", quotas)
router.get("/addnova/:id", adOferta)
router.post("/add", somarQuota, adOfertaSave)


export default router