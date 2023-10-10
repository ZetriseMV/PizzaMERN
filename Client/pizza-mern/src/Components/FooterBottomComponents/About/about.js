import {React,useState} from 'react'
import './about.css'

export default function About(){
    return (
        <div className='about-us'>
            <div className='text-us'>
                    <h2>Pizza-mern Belarus</h2>
                </div>
            <div className='boder'>
                <div className='text-about'>
                    <h2>Добро пожаловать в Pizza-mern Belarus!</h2>
                    <p>Pizza-mern – сеть пиццерий №1 в мире по данным глобальных розничных продаж.</p>
                    <p>Pizza-mern, основанная в 1960 году, на сегодняшний день:</p>
                    <div className='charac-text'>
                        <div className='circle'></div>
                        <p>присутствует в 93 странах мира</p>
                    </div>
                    <div className='charac-text'>
                        <div className='circle'></div>
                        <p>насчитывает более 15 000 пиццерий</p>
                    </div>
                    <div className='charac-text'>
                        <div className='circle'></div>
                        <p> доставляет 2 000 000 пицц ежедневно</p>
                    </div>
                    <div className='charac-text'>
                        <div className='circle'></div>
                        <p>готовит более 400 000 000 пицц в год</p>
                    </div>
                    <p>Первая пиццерия Pizza-mern в Беларуси была открыта 12.11.2015 г. в Минске.</p>
                    <p>Сегодня Pizza-mern BELARUS это:</p>
                    <div className='Boxes-price'>
                        <div className='box'>
                            <h1>34</h1>
                            <p>пиццерии</p>
                        </div>
                        <div className='box'>
                            <h1>Регионы</h1>
                            <p>
                                Минск, Брест, Гомель, Гродно,
                                Витебск, Могилев, Бобруйск, 
                            </p>
                        </div>
                        <div className='box'>
                            <h1>1200+</h1>
                            <p>сотрудников</p>
                        </div>
                    </div>
                    <p>Более 310.000 человек, находящихся в разных уголках планеты и работающих в мировой компании</p>
                    <p>Pizza-mern связывает общая цель: стабильный качественный продукт.</p>
                    <p>Если Вы еще не знакомы с Pizza-mern, мы готовы перевернуть Ваше представление о пицце!</p>
                </div>
            </div>
        </div>
    )
}