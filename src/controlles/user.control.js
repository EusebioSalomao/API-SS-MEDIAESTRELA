import mongoose from "mongoose"
//require("../models/user.modles")
import Usuario from '../models/user.modles.js'
import { createService } from "../services/user.servece.js"

export const addUser = (req, res) => {
    res.render("admin/user")
}

export const create = async (req, res) => {
    try {
        //Verificar posteriormente os dados de entrada
        const erros = []
        console.log(req.body.username)
        if (!req.body.username || typeof req.username == undefined || req.body.username == null) {
            erros.push({ texto: 'O Nome de usuario invalido' })
        }

        if (!req.body.senha || typeof req.senha == undefined || req.body.senha == null) {
            erros.push({ texto: 'senha invalida' })
        }
        if (req.body.senha != req.body.senha2) {
            erros.push({ texto: 'As senhas não correspondem!' })
        }


        if (erros.length > 0) {
            res.render('admin/user', {erros})
        } else {
            const novoUsuario = {
                username: req.body.username,
                telefone: req.body.telefone,
                senha: req.body.senha
            }
            const usuario = await createService(novoUsuario)
            if (!usuario) {
                return res.status(400).send({ message: 'Erro ao criar usuario' })
            }

            res.status(201).redirect('/user/todos')
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }


    /**/
    /*
    new Usuario(novoUsuario).save().then(()=>{
         console.log("Usuario salvo na BD Atlas")
         res.send("O usuario foi salvo na BD Atlas!")
    }).catch((erro)=>{
        console.log("Erro ao salvar usuario")
        res.send("Houve erro!")
    })*/


}

export const mostrarTodos = (req, res) => {
    Usuario.find().lean().then((usuarios) => {
        res.render('admin/tdUsers',{ usuarios })
    }).catch((erro) => {
        console.log("Erro ao listar todos usuarios!")
    })
}

export const buscaPorId = (req, res) => {
    Usuario.findOne({ _id: req.body.id }).lean().then((usuario) => {
        res.send({ usuario })
    }).catch((erro) => {
        console.log("Erro ao pesquisar usuario")
    })
}

export const editUser = (req, res) => {
    if (!req.body.id2 == null) {
        res.send("Insere um id para editar")
    } else {
        buscaPorId();
    }
}
