import {React,useEffect,useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from "axios"
import '../StylesUtils/modal.css'
export default function Modal ({ isOpened,setIsOpened,setIsAuth,setIsAdmin,isAdmin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect((event) => {
      const handleEscape = (event) => {
          if(event.key === "Escape"){
            onModalClose();
          }
      }
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    },[isOpened])

    const onModalClose = () => {
      setIsOpened(false)
    };

    const loginSubmit = (event) => {
      event.preventDefault();
      const data = {
        email:email,
        password:password
      }
      axios.post(
        'http://localhost:1212/auth/login',data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
      .then((response) => { 
        const token = response.data.token;
        localStorage.setItem('jwtToken',token)
        if(token) {
          onModalClose()
          alert('вы успешно вошли в аккаунт')
          setIsAuth(true)
        }
        if(response.data.role.includes('admin')) {
          setIsAdmin(true)
          return <Navigate to = '/adminSession'/>
        }
      })
      .catch((error) => {
          console.log(error);
          if(error.response.status == 400) {
            alert(error.response.data.message)
          }
      });
    }
    
    return(
        <div className="modal-container">
            {
              isAdmin ? ( <Navigate to = '/adminSession'/> ) :
              <div className={`modal-overlay ${isOpened ? "open" : "close"}`}>
                <div className={`modal-main ${isOpened ? "open" : "close"}`}>
                  <div className="modal-body">
                    <div className="btn-close" onClick={onModalClose}></div>
                    <h2>Вход в систему</h2>
                    <hr />
                    <form onSubmit={loginSubmit}>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      <label htmlFor="password">Пароль:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                      <div className = 'btn-group'>
                        <button type="submit">Войти</button>
                        <Link className = 'reg-link' to = '/register'>
                            <p onClick={onModalClose}>зарегистрироваться</p>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div> 
              }
          </div>
    )
}