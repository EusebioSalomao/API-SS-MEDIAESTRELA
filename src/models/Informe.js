import mongoose from 'mongoose'
const informeSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    likes: {
        type: Array,
        required: true
    },
    coments: {
        type: Array,
        required: true
    }
})

const informe = mongoose.model('informes', informeSchema)
export default informe