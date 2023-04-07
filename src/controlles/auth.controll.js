import jwt from 'jsonwebtoken'


export const login = (req, res) => {
    res.render('testes/login')
}

export const logiIn = async (req, res) => {
    const id = '97790790y7y90t'
    const token = await jwt.sign({id : id}, 'ytytutu', {expiresIn: 8400});
    res.send(token)
}

export const inicio = (req, res) => {
    res.render('admin/inicio')
}
