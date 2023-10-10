import './pizzaAdmin.css'
import {React,useState,useEffect} from 'react'
import axios from 'axios'
import PizzaList from '../../ArrayListHelper/pizza/pizzasList'

export default function PizzaAdmin({ pizzas,setPizzas,isAdmin }){

    useEffect(() => {
        axios.get('http://localhost:1212/getPizzas')
        .then((response) => {
            setPizzas(response.data) 
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <div className='pizzaAdmin-main'>
            <PizzaList pizzas = {pizzas} setPizzas = {setPizzas} isAdmin = {isAdmin}/>
        </div>
    )
}