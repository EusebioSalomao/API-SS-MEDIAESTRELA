//require('../models/user.modles')
import Usuario from '../models/user.modles.js' ;

export const createService = function (novoUsuario) {
    new Usuario(novoUsuario).save().then(()=>{
        console.log("Usuario salvo na BD Atlas")
   }).catch((erro)=>{
       console.log("Erro ao salvar usuario "+erro)
});
return "fim"
}
