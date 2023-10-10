import {React,useState,useEffect,useCallback} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './basket.css'
import BasketPizzaList from '../ArrayListHelper/basketPizza/basketPizzaList'

export default function BasketGoods({ selectGood,isAuth,priceBasket,setPriceBasket,countMoney,setSelectGood }){
    const token =  localStorage.getItem("jwtToken");
    const handleDelete = useCallback(
        (id) => {
            let newArray = selectGood.filter((obj) => obj._id !== id);
            setSelectGood(newArray);
        },
        [selectGood]
    );

    const calculateSum = () => {
        let total = 0;
        for (let i = 0; i < selectGood.length; i++) {
            total += selectGood[i].pricePizza ;
        }
        setPriceBasket(total);
    };
    
    useEffect(() => {
        calculateSum();
    }, [selectGood]); 

    const sendOrder = (event) => {
        if(isAuth == false) {
            return alert('Вы не залогинилсь')
        }
        if(priceBasket > countMoney){
            return alert('средства')
        } else {
            const objHistory = {
                arrayHistory:selectGood,
                fullPrice:priceBasket
            }
            axios
                .post('http://localhost:1212/history/purchase',objHistory,{
                    headers: {
                        authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.log(response)
                    if(response.status == 200) {
                        setSelectGood([])
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <div className='basket-main'>
            <div className='title-basket'>
                <h3>Корзина товаров</h3>
            </div>
            <BasketPizzaList selectGood = {selectGood} onDelete = {handleDelete}/>
            <div className='btn-buyBasket'>
                <button onClick = {sendOrder} className='buy-product'>Оформить заказ</button>
                <p>Общая сумма заказа: { priceBasket.toFixed(2) }</p>
            </div>
        </div>
    )
}

