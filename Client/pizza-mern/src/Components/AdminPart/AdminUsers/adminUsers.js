import {React,useState,useEffect,useRef} from 'react'
import UserAdminList from '../../ArrayListHelper/userAdmin/userAdminList'
import axios from 'axios'

import './adminUsers.css'
export default function AdminUsers(){
    const [allUsers,setAllUsers] = useState([])
    const token =  localStorage.getItem("jwtToken");

    useEffect(() => {
        axios
            .get('http://localhost:1212/getUsers',{
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                setAllUsers(response.data.users)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    console.log(allUsers)
    return (
        <div className='user-select'>
            <h2>Пользователи</h2>
            <UserAdminList allUsers = {allUsers}/>
        </div>
    )
}