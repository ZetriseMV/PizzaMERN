import {React,useState,useEffect} from 'react'
import './OneSearchhelp.css'

export default function OneSearchhelp({ typeMeal,titlePizza,characPizza,pricePizza,imagepizzaUrl,_id,selectGood,setSelectGood }){

    const toBasket = () => {

        const objMeal = {
            typeMeal:typeMeal,
            titlePizza:titlePizza,
            characPizza:characPizza,
            pricePizza:pricePizza,
            imagepizzaUrl:imagepizzaUrl,
            _id:_id
        }
        selectGood.push(objMeal)
        setSelectGood(selectGood)
    }
    return (
        <div className='pizza-search'>
            <div className='main_pizza-search'>
                <div className='image-search_pizza'>
                    <img
                        src={ imagepizzaUrl }
                    />
                </div>
                <div className='Text-search_pizza'>
                    <div className='name-pizza_search'>
                        <p>{ titlePizza }</p>
                    </div>
                    <div className='characteristics_pizza-search'>
                            <p>{ characPizza }</p>
                    </div>
                </div>
                <div className='price-search-pizza'>
                    <p>{ pricePizza }</p>
                </div>
                <div className='btnTobuy-search'>
                    <button onClick={toBasket}>В корзину</button>
                </div>
            </div>
        </div> 
    )
}