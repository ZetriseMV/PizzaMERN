import {React,useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import SearchListhelp from '../ArrayListHelper/searchFilterHelper/searchListhelp'

export default function SearchFilter({ pizzas,selectGood,setSelectGood }){
    const [searchNamepizza,setSearchNamepizza] = useState('')

    const findFilterPizza = pizzas.filter((pizza) => {
        if(searchNamepizza == ''){
            return 
        }
        return pizza.titlePizza.toLowerCase().includes(searchNamepizza.toLowerCase())
    })
    return (
        <div>
            <input
                type='text'
                placeholder='Название пиццы'
                value={searchNamepizza}
                onChange={(event) => setSearchNamepizza(event.target.value)}
            />
            {
                <SearchListhelp findFilterPizza = {findFilterPizza} selectGood = {selectGood} setSelectGood = {setSelectGood}/>
            }
        </div>
    )
}