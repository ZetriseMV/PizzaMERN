import {React} from 'react'
import './delivery.css'

export default function Delivery(){
    return (
        <div className='Main-deliv'>
            <div className='pad-top'>
                <h1>Условия доставки</h1>
            </div>
            <div className='deliv-info'>
                <div className='Boxes-price'>
                    <div className='box'>
                        <h1>19.99 руб</h1>
                        <h4>Минимальная сумма заказа  днем (при доставке)</h4>
                    </div>
                    <div className='box'>
                            <h1>21.99 руб</h1>
                            <h4>Минимальная сумма заказа  ночью (23.00-11.00) (при  доставке)</h4>
                    </div>
                    <div className='box'>
                        <h1>24 часа</h1>
                        <h4>Доставка круглосуточно  (только в г. Минске)</h4>
                    </div>
                </div>
                <div className='Info'>
                    <div className='Text-info'>
                        <div className='toggle'>
                            <div className='text'>
                                <p>Время работы пиццерий сети можно посмотреть здесь.</p>
                                <p>Получение Товара в пределах зон обслуживания, обозначенных на карте доставки на сайте <br/> осуществляется:</p>
                                <p>
                                    - Доставкой при Заказе на сумму не менее 19.99 рублей в дневное время (период с 11.00 – <br/>
                                    до 23.00) и 21.99 рублей в ночное время (период с 23.00 – до 11.00) Продавцом за свой счет и <br/>
                                    своими силами (может осуществляться с привлечением третьих лиц, но за счет Продавца).
                                </p>
                            </div>
                        </div>
                        <div className='toggle'>
                            <div className='text'>
                                <p>
                                    Заказы на отложенное время не принимаются в случае, если дата отложенного заказа выпадает на <br/>
                                    вторник - в связи с высокой загруженностью пиццерий.
                                </p>
                            </div>
                        </div>
                        <div className='toggle'>
                            <div className='text'>
                                <p>
                                    Расчет производится согласно актуальным ценам.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}