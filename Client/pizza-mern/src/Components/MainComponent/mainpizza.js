import {React,useEffect,useState} from 'react'
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from "axios"
import SliderCarousel from '../MainSlider/slider'
import PizzaList from '../ArrayListHelper/pizza/pizzasList'
import './mainpizza.css'

export default function MainPizza({ selectGood,setSelectGood,pizzas,setPizzas,isAdmin }){
    
    let location = useLocation();
    const namePath = location.pathname.slice(1);
    let filteredMeals = pizzas.filter(meal => meal.typeMeal === namePath);

    if(filteredMeals.length === 0) {
        filteredMeals = [...pizzas]
    }
    const pricePopularDown = () => {
        return filteredMeals.sort((a,b) => a.pricePizza - b.pricePizza)
    } 
    const pricePopularUpper = () => {
        return filteredMeals.sort((a,b) => b.pricePizza - a.pricePizza)
    }

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
        <div className = 'Pizzas_main-q1'>
             <SliderCarousel/> 
            <div className = 'Sort-text'>
                <div className = 'text-pizza'>
                    <h2>Товары</h2>
                </div>
                <div className = 'sortText_pizza'>
                    <p>Сортировать по:</p>
                    <button onClick = {pricePopularUpper}>Дорогие</button>
                    <button onClick = {pricePopularDown}>Недорогие</button>
                </div>
            </div>
            <div className = 'pizzas-content'>
                <PizzaList
                    pizzas = {filteredMeals}
                    selectGood = {selectGood}
                    setSelectGood = {setSelectGood}
                    isAdmin = {isAdmin}
                />
            </div>
        </div>
    )
}