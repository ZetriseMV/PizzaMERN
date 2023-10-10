import {React,useState} from 'react'
import './getmoney.css'

export default function GetMoney({ moneyTrack,countMoney }){
    return (
        <div className='getmoney-header'>{/* background-color: #f7fcff; */}
            <div className='money-text'>
                <h2>Баланс</h2>
            </div>
            <div className="container">
                <div className="screen"><h2>{ countMoney }</h2></div>
                <button className='btn-money' onClick={moneyTrack}>Получить деньги</button>
            </div>
        </div>
    )
}