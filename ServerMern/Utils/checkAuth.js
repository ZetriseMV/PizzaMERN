import jwt from 'jsonwebtoken'
import SECRET_KEY   from '../jwt.js'

export default function checkAuth(req,res,next){
    try {
        //берем токен при отправке с headers,обрезаем часть bearer 
        const token = (req.headers.authorization || '').split(' ')[1]//bearer
        if(!token) {
            res.status(500).json({
                message:'Пользователь не авторизован '
            })
        }
        const decoded = jwt.verify(token,SECRET_KEY) //расшифровка токена
        req.userId = decoded._id; //берем id пользователя из jwt токена
        next();
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Пользователь не авторизован'
        })
    }
}