//const { findAllMembrosService } = require("../services/membro.service")
import { findQuotaMembro, updateQuotaService, findAllQuotasService } from "../services/quota.service.js"

export const homeFinancas = async (req, res) =>{
    try {
        const quotas = await findAllQuotasService()
        
        res.render("admin/quotas", {quotas})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const somarQuota = async  (req, res, next) => {
    try {
        
        const {valor, id } = req.body;
        const quota = await findQuotaMembro(id)
        
        
        console.log(quota)
        if(quota == null){
            return res.status(401).send({message: 'Quota não encontrada!'})
        }
        
        
        
        if(quota.janeiro < 300 || quota.janeiro === 300){
            //Verificar - > Não está funcionando correctamente...
            const diferecQ = 300 - quota.janeiro;
            if(valor < diferecQ){
                quota.janeiro = quota.janeiro + valor
            }else{
                //FALTA CODIGOS 
                //const novaDiferenc = 
            }
        } 
        
        const {janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro} = quota;
        
        await updateQuotaService(quota._id, janeiro, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro);
        return next();

    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}


