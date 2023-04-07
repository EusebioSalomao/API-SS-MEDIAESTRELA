import { saveMembroServise, findAllMembrosService, findMembroService, findMembroAndUpdateService } from "../services/membro.service.js"
import { saveQuotaService } from "../services/quota.service.js"

export const membros = async (req, res) => {
    try {
        const membros = await findAllMembrosService()

        res.render("admin/membros", {membros})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
export const adMembro = async (req, res) => {
    res.render('admin/adMembro')
}

export const adMembroSave = async (req, res) =>{
    try {
        //const {nome, dataNascimento, bi, opMembro, estadoCivil, pai, mae, telefone, bairro, funcao, dataIngresso, proficao} = req.body
        const membro = req.body
        membro.filiacao = req.body.pai+", e "+req.body.mae
       const novoMembro = await saveMembroServise(membro);
        const quota = {nomeMembro: novoMembro._id}
        await saveQuotaService(quota)

        //req.flash('success_msg','Membro cadastrado com sucesso!')
        res.redirect('/membros')
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const detalhMembro = async (req, res) => {
    try {
        const id = req.params.id
        const membro = await findMembroService(id)
        if(!membro){
            return res.status(401).send({message: 'Membro não encontrado!'})
        }
        res.render('admin/detalhMembro', {membro})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
export const editMembro = async (req, res) => {
    try {
        const id = req.params.id
        const membro = await findMembroService(id)

        console.log(id)
        if(!membro){
            return res.status(401).send({message: 'Membro não encontrado!'})
        }

        res.render('admin/editMembro', {membro})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

export const editMembroSave =async (req,res) =>{
    try {
        const membro = req.body
        const id = req.body.id
        console.log(id)

        await findMembroAndUpdateService(id, membro)
        console.log('Dados do membro editado')
        res.redirect("/membros")
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

