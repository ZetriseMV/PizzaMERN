import {React,useState,useEffect} from 'react' 
import './purchaseList.css'
import OnePurchaseGood from './onePurchaseGood'

export default function PurchaseList({ purchaseUserArr }){
    return (
        <div>
            {
                purchaseUserArr.map((item, index) => (
                    <OnePurchaseGood key={index} {...item}/>
                ))
            } 
        </div>
    )
}