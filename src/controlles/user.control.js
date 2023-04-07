import mongoose from "mongoose"
//require("../models/user.modles")
import Usuario from '../models/user.modles.js'
import {createService} from "../services/user.servece.js"

export const addUser = (req, res) => {
    res.render("testes/user")
}

export const create = async (req, res) => {
    //Verificar posteriormente os dados de entrada
    const erros = []
    if (!req.body.nome || typeof req.nome == undefined || req.body.nome == null) {
        erros.push({ texto: 'Nome invalido' })
    }
    if (!req.body.usernome || typeof req.usernome == undefined || req.body.usernome == null) {
        erros.push({ texto: 'Nome invalido' })
    }
    if (!req.body.senha || typeof req.senha == undefined || req.body.senha == null) {
        erros.push({ texto: 'Nome invalido' })
    }
    if (!req.body.imagem || typeof req.imagem == undefined || req.body.imagem == null) {
        erros.push({ texto: 'Nome invalido' })
    }
    if (!req.body.background || typeof req.background == undefined || req.body.background == null) {
        erros.push({ texto: 'Nome invalido' })
    }

    if (erros.length > 0) {
        res.status(400).send({ mensag: 'Preencha todos os Campos' })
    } else {
        const novoUsuario = {
            nome: req.body.nome,
            usernome: req.body.usernome,
            email: req.body.email,
            senha: req.body.senha,
            imagem: req.body.imagem,
            background: req.body.background
        }
        const usuario = await createService(novoUsuario)
        if (!usuario) {
            return res.status(400).send({ message: 'Erro a criar usuario' })
        }

        res.status(201).send({
            mensage: 'Usuario criado com sucesso!', novoUsuario
        })

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
        res.send({ usuarios })
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
