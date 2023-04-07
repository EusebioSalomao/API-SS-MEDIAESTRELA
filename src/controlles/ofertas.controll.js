import { findMembroService, findAllMembrosService } from '../services/membro.service.js'
import { findOfMembService } from '../services/oferta.service.js'

export const quotas = async (req, res) => {
    res.render('admin/quotas')
}

export const adOferta = async (req, res) => {
    try {
        const id = req.params.id
        const membro = await findMembroService(id)

        res.render('admin/adOferta', { membro })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const adOfertaSave = async (req, res) => {
    try {
        const { data, valor, id } = req.body;
        const erros = []
        if (!data || !valor) {
            erros.push({ texto: 'Preencha correctamente os campos.' })
        }
        if (valor <= 0) {
            erros.push({ texto: 'Insere uma oferta válida.' })
        }
        if (erros.length > 0) {
            res.render('admin/adOferta', { erros })
        } else {
            const membro = await findOfMembService(id, valor)
            res.redirect('/membros')
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
