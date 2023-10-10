import {React,useState,useEffect} from 'react'
import { Navigate } from "react-router-dom"
import MainPizza from '../MainComponent/mainpizza'
import axios from 'axios';
import './register.css'

export default function Register(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullname] = useState('')
    const [isNavigate,setIsNavigate] = useState(false)

    const handleUploadFile = (event) => {
        event.preventDefault();
        if(email == '' || password == '' || fullname == '') {
            return console.log('форма не заполнена')
        }

        const data = {
            email:email,
            password:password,
            fullName:fullname,
        }
        axios.post(
            'http://localhost:1212/auth/register',data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                console.log(response)
                setIsNavigate(true)
            })
            .catch((error) => {
                console.log(error);
                if(error.response.status == 401) {
                    alert(error.response.data.message)
                }
            });
    }
    if(isNavigate == true) {
        return <Navigate to = {'/'}/> 
    } 
    return (
        <div className='header-container'>
            <div className="container">
                <div className="header">
                    <h2>Регистрация</h2>
                </div>
                <div className="form">
                    <form onSubmit={handleUploadFile}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Имя</label>
                            <input
                                className="form-input"
                                type="text"
                                id="name"
                                name="fullname"
                                placeholder="Введите ваше имя"
                                value={fullname}
                                onChange={(event) => setFullname(event.target.value)}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                className ="form-input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Введите ваш email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Пароль</label>
                            <input 
                                className="form-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Введите ваш пароль"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <button className="btn-send" type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}