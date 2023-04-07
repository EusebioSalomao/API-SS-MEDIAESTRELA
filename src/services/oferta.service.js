import Membro from '../models/Membro.js'

export const findOfMembService = (id, valor) => {
    const idOferta = Math.floor(Date.now() * Math.random()).toString(36);
    return Membro.findByIdAndUpdate({_id: id}, {$push: {oferta: {idOferta, valor, data: new Date()}}})
} 
