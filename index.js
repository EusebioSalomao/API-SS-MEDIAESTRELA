import express from "express"
import session from "express-session"
import fileUpload from "express-fileupload"
import fs from 'fs'
import cors from 'cors'

import handlebars from  'express-handlebars'
import path from 'path'
import userRoute from  "./src/routes/user.route.js"
const port = 8081
import connectDB from  "./src/databases/db.js"
import authRouter from  './src/routes/auth.router.js'
import {inicio} from './src/controlles/auth.controll.js'
import membroRouter from  './src/routes/membro.router.js'
import ofertasRouter from  './src/routes/ofertas.router.js'
import financasRouter from  './src/routes/financa.router.js'
import {membros} from './DataMembros.js'

const app = express()
/* 
app.use(session({secret: 'nnbcnvbnxbnm,nd,fm,bx,mbnmbnmvnm'}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}));  */
app.use(cors());


//Config
//Tamplate
    app.engine('handlebars', handlebars.engine({defaultLayout: "main"}))
    app.set("view engine", 'handlebars')

    //Conectar BD
   // connectDB()

//Body Parser
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Diretorio de css e Js
app.use(express.static(path.join("public")))
//app.use(express.static(path.join(__dirname, 'public')))

app.get('/listar', (req, res) =>{
    res.send({"membros": membros})
})
app.get('/', (req, res) =>{
    res.render('admin/teste')
})
app.get('/teste', (req, res) =>{
    res.render('Rota de Teste!')
})

app.use("/user", userRoute)
app.use('/auth', authRouter)
app.get('/inicio', inicio)
app.use('/membros', membroRouter)
app.use('/ofertas', ofertasRouter)
app.use('/financas', financasRouter)

app.listen(port, () => console.log("Servidor SS.MEDIA rodando..."))