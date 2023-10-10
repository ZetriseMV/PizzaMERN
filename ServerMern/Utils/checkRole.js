import SECRET_KEY from '../jwt.js'
import jwt from "jsonwebtoken"

export default function CheckRole(role){//используем замыкание так как нужно чтобы middleware знал о ролях которые разрешены
   return function(req,res,next) {
    try {
        const token = (req.headers.authorization || '').split(' ')[1]
        if(!token) {
            res.status(500).json({
                message:'Пользователь не авторизован'
            })
        }
        const {role:userRole} = jwt.verify(token,SECRET_KEY)
        let hasRole = false;
        userRole.forEach(roleUser => { //проверям если массив разрешенных ролей содержит роль которая есть у пользователя
            if(role.includes(roleUser)){
                hasRole = true;
            }
        })
        if(!hasRole) {
            res.status(500).json({
                message:'Отказано в доступе'
            })
        }
        next();
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Пользователь не авторизован'
        })
    }
   }
}