import {React,useState,useEffect} from 'react'
import '../addPizzaAdm/addPizza.css'
import News from '../../FooterBottomComponents/News/news'
import axios from 'axios'
import ModalUpdateNew from '../../../Utils/ModelsOpen/modalUpdateNew'

export default function AddNew({ news,setNews,isAdmin,isModalOpen,setIsModalOpen }){
    const [title,setTitle] = useState('')
    const [textBody,setTextBody] = useState('')
    const token =  localStorage.getItem("jwtToken");
    const sendNew = (event) => {
        event.preventDefault();
        try{
            const data = {
                title:title,
                textBody:textBody
            }
            axios
                .post('http://localhost:1212/createnews',data,{
                    headers: {
                        "Content-Type": "application/json",
                    },
                    headers: {
                        authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    if(response.status == 201) {
                        setNews(response.data.AllPosts)
                        setTitle('')
                        setTextBody('')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }catch(err){
            throw new Error(err)
        }
    }
    return (
        <div className='background-adm'>
            <News news = {news} setNews = {setNews} isAdmin = {isAdmin} isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>
            <form className='form-add' onSubmit={sendNew}>
                <h2>Добавить новость</h2>
                <label className='label-adm'>Заголовок:</label>
                <input
                    className='inp-adm'
                    type="text"
                    name="title" 
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Текст:</label>
                <input
                    className='inp-adm'
                    type="text"
                    name="textBody" 
                    value={textBody}
                    onChange={(event) => setTextBody(event.target.value)}
                  />
                  <button className='cart-button' type='submit'>Отправить</button>
            </form>
        </div>
    )
}