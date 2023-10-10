import {React,useState,useEffect} from 'react' 
import OneUser from './OneUser'
import './userAdminList.css'


export default function UserAdminList({ allUsers }){
    return(
        <div className='item-user'>
            {allUsers.map((item, index) => (
                <OneUser key={index} {...item}/>
            ))}
   </div> 
    )
}