//require('../models/user.modles')
import Usuario from '../models/user.modles.js' ;

export const createService = (novoUsuario) => Usuario(novoUsuario).save();

export const findUserByIdDeleteService = (id) => Usuario.findByIdAndDelete(id)

export const findUserBuNameService = (username) => Usuario.findOne({usernome: username})
