export const validFildsAdM = async (req, res, next) =>{
    try {
        const {nome, dataNascimento, bi, opMembro, estadoCivil, pai, mae, telefone, bairro, funcao, dataIngresso, proficao} = req.body

        
        if(!nome || !dataNascimento || opMembro == 0 || estadoCivil == 0 || !bairro || funcao == 0 || !dataIngresso){
            return res.status(400).send({message: 'Preencha todos os campos por favor!'})
        }
        return next()
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
