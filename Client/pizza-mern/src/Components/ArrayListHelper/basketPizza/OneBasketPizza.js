import {React,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './onebasketpizza.css'

export default function OneBasketPizza({ typeMeal,titlePizza,characPizza,pricePizza,imagepizzaUrl,_id,deleteObjectById }){

    const [stateCount,setStateCount] = useState(1)
    const [money,setMoney] = useState( pricePizza )

    const CountAmountAdd = () => {
        setStateCount(stateCount + 1)
    }
    const CountAmountDel = () => {
        if(stateCount == 1) {
            return alert('> 1')
        }
        setStateCount(stateCount - 1)
    }
    return (
        <div className='header-basket'>
            <div className='images-basket'>
                <img
                    src={ imagepizzaUrl }
                />
            </div>
            <div className='quantity-basket'>
                <button onClick={CountAmountAdd} className='add-from'>+</button>
                <button onClick={CountAmountDel} className='del-from'>-</button>
            </div>
            <div className='amout-goods'>
                <p>{ stateCount }</p>
            </div>
            <div className='descriptions-basket'>
                <p>{ titlePizza }</p>
                <p>{ characPizza }</p>
            </div>
            <div className='group-el'>
                <div className='delElement'>
                    <button className='btn-delElem' onClick={() => deleteObjectById(_id)}>X</button>
                </div>
                <div className='total-price'>{ money * stateCount }</div>
            </div>
        </div> 
    )
}