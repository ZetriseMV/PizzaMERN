import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from 'body-parser'
import checkErrors from './Validations/checkErrors.js' //middleware ошибок
import checkAuth from './Utils/checkAuth.js'
import CheckRole from './Utils/checkRole.js'
import { 
    registerValidation, //проверка регистрации от пользователя
    loginValidation, //проверка логина от пользователя
    CreateNewpostValidation, //проверка создания новости от админа
    CreatePizzaValidation, //проверка создания пиццы от админа
    CreateReviewValidation //проверка отзыва от пользователя 
} from './Validations/validationAuth.js'
import { register,login,getUsers,removeUser,pushpurchase,gethistory } from './Controller/UserController.js' //контроллеры
import { getPizzas,delPizzas,addPizza } from './Controller/PostPizzaController.js'
import { getAllnews,createNews,updateNew,deleteNew } from './Controller/PostNewController.js'


mongoose //подключение монгуса
    .connect('mongodb+srv://user:user123@cluster0.xeriwec.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB is okey'))
    .catch((err) => console.log('DB is not working',err)) 

const PORT = 1212;

const app = express();

app.use(express.json())

app.use(cors()) //для PORT

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/auth/login',loginValidation,checkErrors,login)//авторизация 1.middleware-проверка логина на правильную заполненность,2.сборка ошибок,3.контроллер
app.post('/auth/register', registerValidation,checkErrors,register)//регистрация 
app.get('/getUsers',checkAuth,CheckRole(['admin']),checkErrors,getUsers)//получение всех пользователей(админ)
app.delete('/deleteUser/:id',checkAuth,CheckRole(['admin']),checkErrors,removeUser)//удаление пользователя
app.post('/history/purchase',checkAuth,checkErrors,pushpurchase)
app.get('/gethistory/client',checkAuth,checkErrors,gethistory)


app.get('/getPizzas',getPizzas)//получение всех пицц
app.delete('/pizzaremove/:id',checkAuth,checkErrors,delPizzas)//удаление пиццы
app.post('/addpizza',checkAuth,CreatePizzaValidation,checkErrors,addPizza)//добавление пиццы

app.get('/getAllnews',getAllnews)//получение всех новостей 
app.post('/createnews',checkAuth,CheckRole(['admin']),CreateNewpostValidation,checkErrors,createNews)//добавление новости
app.patch('/updateNew/:id',checkAuth,CheckRole(['admin']),CreateNewpostValidation,checkErrors,updateNew)//обновление статьи
app.delete('/deleteNew/:id',checkAuth,CheckRole(['admin']),checkErrors,deleteNew)

app.listen(PORT,(err) => {
    if(err){
        return console.log(err)
    } else {
        console.log(`Server is starting on PORT ${PORT}`)
    }
}) 
