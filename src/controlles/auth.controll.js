import jwt from 'jsonwebtoken'
import passport from 'passport'
import bcrypt from 'bcryptjs';
import { findUserBuNameService, findUserByIdDeleteService } from '../services/user.servece.js'
import { authMidleware } from '../middlewares/auth.middleware.js';


export const login = (req, res) => {
    res.render('admin/login')
}

export const logiIn = async (req, res, next) => {
    const username = req.body.username;
    const user = await findUserBuNameService(username)
    const erros = []
    /* if(!user){
        erros.push({texto: 'Usuário ou senha errada'})
        return res.render('admin/login', {erros})
    }
    const passportIsValid = await bcrypt.compare(req.body.senha, user.senha)
    if(!passportIsValid){
            erros.push({texto: 'Usuário ou senha errada'})
            return res.render('admin/login', {erros})
        } */

    await authMidleware(passport)
    passport.authenticate('local', {
        successRedirect: '/inicio',
        failureRedirect: '/auth/login',
        failureFlash: true
    })(req, res, next)

    //const id = user._id;
    //const token = await jwt.sign({ id: id }, 'ytytutu', { expiresIn: 8400 });
    //res.redirect('/inicio')
}

export const inicio = (req, res) => {
    res.render('admin/inicio')
}

export const deletar = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await findUserByIdDeleteService(id);
        if (!user) {
            return res.status(200).send('Usuario n encontrado')
        }
        res.redirect('/user/todos')
    } catch (error) {
        res.status(500).send({ mesage: error.mesage })
    }
}
