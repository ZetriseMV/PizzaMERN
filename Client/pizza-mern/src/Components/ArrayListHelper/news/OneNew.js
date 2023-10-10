import {React,useState,useEffect} from 'react'
import axios from 'axios'
import ModalUpdateNew from '../../../Utils/ModelsOpen/modalUpdateNew'
import './OneNew.css'

export default function OneNew({ news,setNews,isAdmin,textBody,title,updatedAt,user,_id }){
    const [newregex,setNewregex] = useState('')
    const [openModal,setOpenModal] = useState(false)
    const [IdNew,setIdNew] = useState('')
    const token =  localStorage.getItem("jwtToken");
    
    useEffect(() => {
        const str = updatedAt;
        const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z/;
        const newStr = str.replace(regex, '$3.$2.$1 в $4:$5:$6');
        setNewregex(newStr)
    },[])

    const handleRemoveNew = () => {
        axios
            .delete(`http://localhost:1212/deleteNew/${_id}`,{
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                console.log(response)
                if(response.data.success == true) {
                    alert('запись была удалена')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleUpdateNew = () => {
        setOpenModal(true)
        setIdNew((prev) => prev + _id)
    } 

    return(
        <div>
            <div className="news-item">
                <div className="news-author">
                    <span className="news-author-name">{ user.fullName }</span>
                </div>
                <div className='text-continer_news'>
                    <div className='line-button'>
                        <div className='title_news'>
                            <h5 className = 'title'>{ title }</h5>
                        </div>
                        {   
                            isAdmin == true &&  
                            <div className="news-actions">
                                <span onClick = {handleRemoveNew} className="news-action" id = "delete" title="Удалить статью">delete</span>
                                <span onClick = {handleUpdateNew} className="news-action" id = "edit" title="Изменить статью">edit</span>
                            </div>
                        }
                    </div>
                    <div className="news-content">
                        <p className="news-text">{ textBody }</p>
                        <span className="news-time">{ newregex }</span>
                    </div>
                </div>  
            </div>
            {
                openModal == true && <ModalUpdateNew openModal = {openModal} setOpenModal = {setOpenModal} IdNew = {IdNew}/>
            } 
        </div>
    )
}