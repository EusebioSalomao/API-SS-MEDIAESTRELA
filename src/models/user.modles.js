import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: {
        type: String,
        required:true
    },
    usernome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
})

const usuario  = mongoose.model("usuarios", Usuario)
export default usuario