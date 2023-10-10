import React, { useState } from 'react'
import './onepizza.css'
import axios from 'axios'

export default function OnePizza({  typeMeal,titlePizza,characPizza,pricePizza,imagepizzaUrl,_id,selectGood,setSelectGood,isAdmin,setPizzas,pizzas }){
    const token =  localStorage.getItem("jwtToken");
    const toBasket = (event) => {
        event.preventDefault();

        const obj = {
            typeMeal:typeMeal,
            titlePizza:titlePizza,
            characPizza:characPizza,
            pricePizza:pricePizza,
            imagepizzaUrl:imagepizzaUrl,
            _id:_id
        }

        selectGood.push(obj)
        setSelectGood(selectGood)
    }
    const delElement = () => {
        axios 
            .delete('http://localhost:1212/pizzaremove/' + _id,{
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        axios
            .get('http://localhost:1212/getPizzas')
            .then((response) => {
                setPizzas(response.data) 
                console.log(pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className = 'pizzaBody'>
            <div className='image-pizza'>
                <img
                    src = {imagepizzaUrl}
                />
            </div>
            <div className='Text-name_pizza'>
                 <h5>{ titlePizza }</h5> 
            </div>
            <div className='charac-pizza'>
                <p>{ characPizza }</p>
            </div>
            {
                isAdmin == false && <div className='btn-buy'>
                <button onClick={toBasket} className="cart-button">
                    <span className="cart-icon"></span>
                    В корзину
                </button>   
            </div>
            }
            
            <div className='Price'>
                <p>{ pricePizza } рублей</p>
            </div>
            {
                isAdmin == true && 
                <div className='group-buttons'>
                    <button onClick={delElement} className='btn-adm'>
                        <span className="news-action" id = "delete" title="Удалить статью">delete</span>
                        Удалить
                    </button>
                </div>
            }
        </div>
    )
}