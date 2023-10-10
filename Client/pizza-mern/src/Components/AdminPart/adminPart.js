import {React,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './adminPart.css'

export default function AdminPart(){
    return(
        <div>
            <nav className="admin-menu">
                <ul>
                    <li>
                        <Link className = 'link-admin' to="/adminSession/pizza">
                            Пицца
                        </Link>
                    </li>
                    <li>
                        <Link className = 'link-admin' to="/adminSession/users">
                            Пользователи
                        </Link>
                    </li>
                    <li>
                        <Link className = 'link-admin' to = '/adminSession/addpizza'>
                            Добавить пиццу
                        </Link>
                    </li>
                    <li>
                        <Link className = 'link-admin' to = '/adminSession/addnew'>
                            Добавить новость
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
