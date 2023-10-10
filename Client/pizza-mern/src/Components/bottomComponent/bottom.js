import {React} from 'react'
import {Link} from "react-router-dom"
import './bottom.css'

export default function Bottom(){
    return (
        <div className='Main-bottom'>
            <div className='footer-menu'>
                <ul>
                    <li>
                        <Link className='footer-bottom' to='/about'>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link className='footer-bottom' to = '/news'>
                            Новости
                        </Link>
                    </li>
                    <li>
                        <Link className='footer-bottom' to = '/feedback'>
                            Обратная связь
                        </Link>
                    </li>
                    <li>
                        <Link className='footer-bottom' to = '/getmoney'>
                            Деньги
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}