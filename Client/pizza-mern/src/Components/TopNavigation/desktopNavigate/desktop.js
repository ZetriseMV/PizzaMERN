import {React,useState} from 'react'
import { Link } from "react-router-dom";
import './desktop.css'
export default function DeskNavigate({ priceBasket }){
    return (
        <div className='desktop-align'>
            <nav>
                <ul>
                    <li>
                        <Link className = 'linkCat' to = '/'>
                            Все товары
                        </Link>
                    </li>
                    <li>
                        <Link className = 'linkCat' to = '/pizza'>
                            Пицца
                        </Link>
                    </li>
                    <li>
                        <Link className='linkCat' to = '/wings'>
                            Курица
                        </Link>
                    </li>
                    <li>
                        <Link className='linkCat' to = '/potato'>
                            Картофель
                        </Link>
                    </li>
                    <li>
                        <Link className='linkCat' to = '/bread'>
                            Хлебцы
                        </Link>
                    </li>
                    <li>
                        <Link className='linkCat' to = '/gsalad'>
                            Салаты
                        </Link>
                    </li>
                    <li>
                        <Link className='linkCat' to = '/starter'>
                            Десерты
                        </Link>
                    </li>
                    <div className='vertical-line'></div>
                    <li>
                        <Link className='linkCat' to = '/news'>
                            Новости
                        </Link>
                    </li>
                    <li>
                        <div className='purchase-btn'>
                            <Link className='linkCat' to='/basket'>
                                <button className='btn-cart'>
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                    Корзина: { priceBasket.toFixed(2) } руб
                                </button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}