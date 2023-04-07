import mongoose from 'mongoose'
const ofertaSchena = mongoose.Schema({
    nomeMembro : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "membros"
    },
    janeiro : {
        type: Number,
        default: 0
    },
    fevereiro : {
        type: Number,
        default: 0
    },
    marco : {
        type: Number,
        default: 0
    },
    abril : {
        type: Number,
        default: 0
    },
    maio : {
        type: Number,
        default: 0
    },
    junho : {
        type: Number,
        default: 0
    },
    julho : {
        type: Number,
        default: 0
    },
    agosto : {
        type: Number,
        default: 0
    },
    setembro : {
        type: Number,
        default: 0
    },
    outubro : {
        type: Number,
        default: 0
    },
    novembro : {
        type: Number,
        default: 0
    },
    dezembro : {
        type: Number,
        default: 0
    }

})

const quota = mongoose.model('quotas', ofertaSchena)
export default quota