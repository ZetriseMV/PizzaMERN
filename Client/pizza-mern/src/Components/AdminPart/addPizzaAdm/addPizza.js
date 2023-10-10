import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './addPizza.css'

export default function AddPizza({ setPizzas }){
    const [typeMeal,setTypeMeal] = useState('')
    const [titlePizza,setTitlePizza] = useState('')
    const [characPizza,setCharacPizza] = useState('')
    const [pricePizza,setPricePizza] = useState(0)
    const [imagepizzaUrl,setImagepizzaUrl] = useState('')
    const token =  localStorage.getItem("jwtToken");

    const addPizzaSubmit = (event) => {
        event.preventDefault();
        const data = {
            typeMeal:typeMeal,
            titlePizza:titlePizza,
            characPizza:characPizza,
            pricePizza:Number(pricePizza),
            imagepizzaUrl:String(imagepizzaUrl)
        }
         axios
            .post('http://localhost:1212/addpizza',data,{
                headers: {
                    "Content-Type": "application/json",
                },
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response)

                if(response.statusText == 'OK') {
                    setTypeMeal('')
                    setTitlePizza('')
                    setCharacPizza('')
                    setPricePizza('')
                    setImagepizzaUrl('')
                    alert('Пицца добавлена')
                }
                
            })
            .catch((err) => {
                console.log(err)
                if(err.response.status == 401) {
                    alert(`${err.response.data.message}`)
                }
            }) 
    }
    return (
        <div className='background-adm'>
            <form className='form-add' onSubmit={addPizzaSubmit}>
                <h2>Добавить товар</h2>
                <label className='label-adm'>Название еды:</label>
                <input 
                    className='inp-adm' 
                    type="text" 
                    name="typeMeal" 
                    value={typeMeal}
                    onChange={(event) => setTypeMeal(event.target.value)}
                />
                <label className='label-adm'>Название блюда:</label>
                <input 
                    className='inp-adm' 
                    type="text" 
                    name="titlePizza" 
                    value={titlePizza}
                    onChange={(event) => setTitlePizza(event.target.value)}
                />
                <label className='label-adm'>Характеристика блюда:</label>
                <input
                    className='inp-adm' 
                    type="text"
                    name="characPizza" 
                    value={characPizza}
                    onChange={(event) => setCharacPizza(event.target.value)}
                />
                <label className='label-adm'>Цена:</label>
                <input 
                    className='inp-adm'
                    type="number"
                    name="pricePizza" 
                    value={pricePizza}
                    onChange={(event) => setPricePizza(event.target.value)}
                  />
                <label className='label-adm'>Изображение:</label>
                <input 
                    className='load-file_adm'
                    type="file"
                    name="imagepizzaUrl" 
                    onChange={(event) => setImagepizzaUrl(event.target.files[0])}
                  />
                  <button className='cart-button' type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
}
