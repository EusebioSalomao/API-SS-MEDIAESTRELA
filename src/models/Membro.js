import mongoose from "mongoose"
const membroSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    bi: {
        type: String,
        require: true
    },
    estadoCivil: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    detaNasc: {
        type: Date,
        require: true
    },
    opMembro: {
        type: String,
        require: true
    },
    estadoMembro: {
        type: String,
        require: true
    },
    funcao: {
        type: String,
        require: true
    },
    proficao: {
        type: String,
        require: true
    },
    filiacao: {
        type: String,
        require: true
    },
    dataIngresso: {
        type: Date,
        require: true
    },
    eDirigente: {
        type: Number,
        default: 0
    },
    oferta: {
        type: Array,
        require: true
    }
})

const membro = mongoose.model('membros', membroSchema)
export default membro