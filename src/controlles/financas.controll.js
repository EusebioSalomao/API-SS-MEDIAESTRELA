//const { findAllMembrosService } = require("../services/membro.service")
import { findQuotaMembro, updateQuotaService, findAllQuotasService } from "../services/quota.service.js"

export const homeFinancas = async (req, res) => {
    try {
        const quotas = await findAllQuotasService()

        res.render("admin/quotas", { quotas })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const somarQuota = async (req, res, next) => {
    try {

        let { valor, id } = req.body;
        const quota = await findQuotaMembro(id)

        if (quota == null) {
            return res.status(401).send({ message: 'Quota não encontrada!' })
        }

        if (quota.janeiro < 300) {
            //Verificar - > Não está funcionando correctamente...
            const diferecQ = 300 - quota.janeiro;
            if (valor > diferecQ) {
                valor -= diferecQ;
                quota.janeiro += diferecQ;
            } else {
                quota.janeiro += valor;
                valor = 0;
            }
        }
        if (quota.fevereiro < 300) {
            //Verificar - > Não está funcionando correctamente...
            const diferecQ = 300 - quota.fevereiro;
            if (valor > diferecQ) {
                valor -= diferecQ;
                quota.fevereiro += diferecQ;
            } else {
                quota.fevereiro += valor;
                valor = 0;
            }
        }
        if (quota.marco < 300) {
            const diferecQ = 300 - quota.marco;
            if (valor > diferecQ) {valor -= diferecQ;quota.marco += diferecQ;
            } else { quota.marco += valor;valor = 0; }}
        if (quota.abril < 300) {
            const diferecQ = 300 - quota.abril;
            if (valor > diferecQ) {valor -= diferecQ;quota.abril += diferecQ;
            } else { quota.abril += valor;valor = 0; }}
        if (quota.maio < 300) {
            const diferecQ = 300 - quota.maio;
            if (valor > diferecQ) {valor -= diferecQ;quota.maio += diferecQ;
            } else { quota.maio += valor;valor = 0; }}
        if (quota.junho < 300) {
            const diferecQ = 300 - quota.junho;
            if (valor > diferecQ) {valor -= diferecQ;quota.junho += diferecQ;
            } else { quota.junho += valor;valor = 0; }}
        if (quota.julho < 300) {
            const diferecQ = 300 - quota.julho;
            if (valor > diferecQ) {valor -= diferecQ;quota.julho += diferecQ;
            } else { quota.julho += valor;valor = 0; }}
        if (quota.agosto < 300) {
            const diferecQ = 300 - quota.agosto;
            if (valor > diferecQ) {valor -= diferecQ;quota.agosto += diferecQ;
            } else { quota.agosto += valor;valor = 0; }}
        if (quota.setembro < 300) {
            const diferecQ = 300 - quota.setembro;
            if (valor > diferecQ) {valor -= diferecQ;quota.setembro += diferecQ;
            } else { quota.setembro += valor;valor = 0; }}
        if (quota.outubro < 300) {
            const diferecQ = 300 - quota.outubro;
            if (valor > diferecQ) {valor -= diferecQ;quota.outubro += diferecQ;
            } else { quota.outubro += valor;valor = 0; }}
        if (quota.novembro < 300) {
            const diferecQ = 300 - quota.novembro;
            if (valor > diferecQ) {valor -= diferecQ;quota.novembro += diferecQ;
            } else { quota.novembro += valor;valor = 0; }}
        if (quota.dezembro < 300) {
            const diferecQ = 300 - quota.dezembro;
            if (valor > diferecQ) {valor -= diferecQ;quota.dezembro += diferecQ;
            } else { quota.dezembro += valor;valor = 0; }}


        const { janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro } = quota;

        await updateQuotaService(quota._id, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro);
        return next();

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
}


