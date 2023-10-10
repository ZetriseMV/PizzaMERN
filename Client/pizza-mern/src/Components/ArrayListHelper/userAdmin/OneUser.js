import {React,useEffect,useState} from 'react' 
import axios from 'axios'
import './OneUser.css'

export default function OneUser({ createdAt,fullName,_id }){
    const [newDate,setNewDate] = useState('')
    const token =  localStorage.getItem("jwtToken");

    useEffect(() => {
        const str = createdAt;
        const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z/;
        const newStr = str.replace(regex, '$3.$2.$1 в $4:$5:$6');
        setNewDate(newStr)
    },[])

    const handleDeleteUser = () => {
        axios
            .delete(`http://localhost:1212/deleteUser/${_id}`,{
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className='main-user'>
            <div className='user'>
                <div className='btn-text'>
                    <p>Имя пользователя: { fullName }</p>
                    <button onClick={handleDeleteUser}>X</button>
                </div>
                <p>Дата создания аккаунта: { newDate }</p>
            </div>
        </div>  
    )
}