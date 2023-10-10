import OnePizza from './OnePizza.js'
import { Link } from 'react-router-dom'
import './pizzasList.css'
export default function PizzaList({ pizzas,selectGood,setSelectGood,isAdmin,setPizzas }){
    return (
        <div className='main-pizza'>
            {pizzas.map((item, index) => (
                <OnePizza key={index} {...item}
                    selectGood = {selectGood}
                    setSelectGood = {setSelectGood}
                    isAdmin = {isAdmin}
                    setPizzas = {setPizzas}
                    pizzas = {pizzas}
                />
            ))}
        </div>
    )
}