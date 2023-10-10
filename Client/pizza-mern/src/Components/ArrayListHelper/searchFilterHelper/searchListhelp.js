import {React,useState,useEffect} from 'react'
import OneSearchhelp from './OneSearchhelp'
import './searchListhelp.css'

export default function SearchListhelp({ findFilterPizza,selectGood,setSelectGood }){
    return (
       <div className='item-search_pizza'>
            {findFilterPizza.map((item, index) => (
                <OneSearchhelp key={index} {...item} selectGood = {selectGood} setSelectGood = {setSelectGood}/>
            ))}
       </div> 
    )
}