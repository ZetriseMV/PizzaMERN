import {React} from 'react'
import { Link } from 'react-router-dom'
import './errorpage.css'

export default function ErrorRote(){
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>4<span>0</span>4</h1>
                    </div>
                    <h2>Oops! Страница не найдена</h2>
                    <p>Извините, но страница, которую вы ищете, не существует или была удалена</p>
                    <Link className='error-link' to = '/'>
                        Вернуться на главную страницу
                    </Link>
                </div>
            </div>
        </div>
    )
}