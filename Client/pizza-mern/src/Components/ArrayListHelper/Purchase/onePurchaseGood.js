import {React,useState,useEffect} from 'react'
import './onePurchaseGood.css'

export default function OnePurchaseGood({ imagepizzaUrl,titlePizza,pricePizza,characPizza }){
    return (
        <div className="pizza">
            <img src={ imagepizzaUrl } alt={ titlePizza } className="pizza-image" />
            <div className="pizza-info">
                <h3 className="pizza-name">{ titlePizza }</h3>
                <p className="pizza-price">{ pricePizza }</p>
                <p className="pizza-description">{ characPizza }</p>
            </div>
        </div>
    )
}