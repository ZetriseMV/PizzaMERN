import {React,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './basketpizzalist.css'
import OneBasketPizza from './OneBasketPizza'

export default function BasketPizzaList(props){
    const { selectGood } = props;

    const deleteObjectById = (id) => {
        props.onDelete(id);
    };

    return (
        <div>
            {selectGood.map((item, index) => (
                <OneBasketPizza key={index} {...item} deleteObjectById = {deleteObjectById}/>
            ))}
        </div>
    )
}