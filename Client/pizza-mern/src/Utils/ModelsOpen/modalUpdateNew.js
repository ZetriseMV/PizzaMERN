import {React,useState,useEffect} from 'react'
import axios from 'axios'
import '../StylesUtils/modalUpdateNew.css'

export default function ModalUpdateNew({ openModal,setOpenModal,IdNew }){
    const [textBody,setTextBody] = useState('')
    const [title,setTitle] = useState('')
    const token =  localStorage.getItem("jwtToken");
    const updateNewSubmit = (event) => {
        event.preventDefault();
        const data = {
            title:title,
            textBody:textBody
        }
        axios
          .patch(`http://localhost:1212/updateNew/${IdNew}`,data,{
            headers: {
              "Content-Type": "application/json",
            },
            headers: {
              authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            if(response.status == 201) {
              setOpenModal(false)
              setTextBody('')
              setTitle('')
            }
          })
          .catch((err) => {
            console.log(err)
          })

    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <div className={`modal-overlay ${openModal ? 'open' : 'close'}`}>
        <div className={`modal-main ${openModal ? 'open' : 'close'}`}>
          <div className="modal-body">
            <div className="btn-close" onClick={handleCloseModal}></div>
            <h2>Изменение статьи</h2>
            <hr />
            <form onSubmit={updateNewSubmit}>
              <label htmlFor="header">Заголовок:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
              <label htmlFor="textBody">Текст</label>
              <input
                type="text"
                id="textBody"
                value={textBody}
                onChange={(event) => setTextBody(event.target.value)}
                required
              />
              <div className="btn-group">
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}