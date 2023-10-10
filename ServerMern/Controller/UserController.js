import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserSchema from '../SchemeModels/user.js'
import Role from '../SchemeModels/role.js'
import SECRET_KEY from '../jwt.js'
import PurchaseSchema from '../SchemeModels/purchase.js'
import purchase from "../SchemeModels/purchase.js"

export const register = async (req,res) => {
    try {
        const { email } = req.body;
        const userCandidate = await UserSchema.findOne({ email })

        if(userCandidate){//проверка на уже существующего пользователя
            return res.status(401).json({
                message:'Пользователь уже создан'
            })
        }
        
        const password = req.body.password;
        const salt = await bcrypt.genSalt(7)//генерация соли(случайная строка которая добавляется к паролю перед хешированием)
        const hash = await bcrypt.hash(password,salt)
        const userRole = await Role.findOne({value:"user"}) //получение роли из базы данных

        const doc = new UserSchema({
            fullName:req.body.fullName,
            role:[userRole.value],
            email:req.body.email,
            passwordHash:hash,
        })
        const user = await doc.save()

        const {passwordHash, ...userData } = user._doc;//без passwordhash 

        return res.status(200).json({
            userData,
            message:'Пользователь успешно зарегистрирован'
        })

    }catch(err) {
        console.log(err)
        res.status(500).json({
            message:'не удалось зарегистрироваться'  
        })
    }
}
export const login = async (req,res) => { 
    try {
        const { email,password } = req.body;
        const user = await UserSchema.findOne({ email })
        
        if(!user) {
            return res.status(400).json({
                message:`Пользователь с почтой ${ email } не найден`
            })
        }
        const isValidPass = await bcrypt.compare(password,user.passwordHash)
        if(!isValidPass){
            return res.status(400).json({
                message:'Не удалось войти.Неправильный логин или пароль'
            })
        }
        const token = jwt.sign({ //создаем токен
            _id:user._id, //id пользователя
            role:user.role, //роль пользователя
        },SECRET_KEY, // секретный ключ
        {
            expiresIn:'10h' //срок жизни токена
        })
        
        if(user.role.includes('admin')) { 
            return res.status(200).json({
                token,
                role:user.role,
                message:'Admin role session'
            })
        }

        res.status(200).json({
            token, 
            message:'Client role session',
            role:user.role // отпарвление роли пользователя
        }) 

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'Не удалось войти'
        })
    }   
}
export const getUsers = async (req,res) => {
    try{
        const projection = { fullName: 1, _id: 1, createdAt: 1 }; //какие поля возваращать в результате
        const users = await UserSchema.find({ role:'user' },projection)//находим пользователей и возваращаем с фильтром
        res.status(200).json({
            message:'Пользователи из базы данных',
            users
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'Не удалось найти пользователей'
        })
    }
}
export const pushpurchase = async(req,res) => {
    try {
        const { arrayHistory } = req.body;//массив из корзины
        const fullPrice = req.body.fullPrice.toFixed(2)//цена из корзины
        const userId = req.userId;//id пользователя
        PurchaseSchema.findOne({ user:userId })//найходим пользователя по id
            .then((purchase) => {
                if(purchase) {// если в базе данных уже есть история этого пользователя
                    purchase.updateOne({ $push: { valuePurchase: { $each: arrayHistory } } })//обновляем valuePurchase 
                        .then((result) => {
                            res.status(200).json({
                                message:'Обновление истории покупок'
                            })
                        })
                        .catch((err) => { // вывод ошибки
                            console.log(err)
                            res.status(500).json({
                                message:'Не удалось обновить историю'
                            })
                        })
                } else { // если у пользователя нету истории покупок
                    const newPurchase = new PurchaseSchema({ //создаем новую историю покупок пользователю
                        valuePurchase:arrayHistory,
                        fullPrice:fullPrice,
                        user:userId
                    })
                    newPurchase.save() // сохраняем
                    .then((purchase) => {
                        res.status(200).json({
                            message:'Новая история покупок'
                        })
                    })
                        .catch((err) => { // отправляем ошибку 
                            console.log(err)
                            res.status(500).json({
                                message:'Не удалось сохранить'
                            })
                        })
                }
            })
        .catch((err) => { // отправляем ошибку 
            console.log(err)
            res.status(500).json({
                message:'Не удалось найти пользователя'
            })
        })
    } catch (err) {
        res.status(500).json({
            message:'Не удалось добавить в историю покупок'
        })
    }
}
export const removeUser = async(req,res) => {
    try {
        const idUser = req.params.id;
        console.log(idUser)
        const userRemove = await UserSchema.findOneAndDelete(
            {
                _id:idUser
            }
        )
         if(userRemove) {
            return res.status(201).json({
                message:'Пользователь упешно удален'
            })
        } 
        res.status(201).json({
            message:'Пользователь упешно удален'
        }) 
    } catch (err) {
        res.status(500).json({
            message:'Произошла ошибка при удалении пользователей'
        })
    }
}
export const gethistory = async(req,res) => {
    try {
        const userId = req.userId
        const user = await PurchaseSchema.find({ user:userId })
        if(!user) {
            return res.status(404).json({
                message:'Пользователь не найден'
            })
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось получить историю покупок'
        })
    }   
}
