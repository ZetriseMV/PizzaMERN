import {React,useEffect,useState} from 'react'
import './feedback.css'

export default function Feedback(){
    const [numberPhone,setNumberPhone] = useState('')//номер телефона
    const [name,setName] = useState('')//имя 
    const [email,setEmail] = useState('')//email
    const [city,setCity] = useState('')//город
    const [subject,setSubject] = useState('')//тема обращения
    const [titleMessage,setTitleMessage] = useState('')//сообщение
    
    const sendPersondata = (event) => {
        event.preventDefault();
        console.log(city,subject)
    }
    
    return (
        <div className='feedback-background'>
            <div className='feedback-text'>
                <h2>Обратная связь</h2>
            </div>
            <div className="feedback-form">
                <h2>Оставьте отзыв о нашей работе</h2>
                <p>Ваше мнение очень важно для нас. Пожалуйста, заполните форму ниже и нажмите кнопку "Отправить".</p>
                <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Введите ваше имя" required value={ name} onChange={(event)=> setName(event.target.value)} />
                <label htmlFor="phone">Ваш телефон</label>
                <input type="tel" id="phone" name="phone" placeholder="Введите ваш телефон" required value={ numberPhone} onChange={(event)=> setNumberPhone(event.target.value)} />

                <label htmlFor="email">Ваш e-mail</label>
                <input type="email" id="email" name="email" placeholder="Введите ваш e-mail" required value={email} onChange={(event)=> setEmail(event.target.value)} />
                <label htmlFor="city">Ваш город</label>
                <select id="city" name="city" required value={city} onChange={(event)=> setCity(event.target.value)}>
                    <option value="">Выберите ваш город</option>
                    <option value="Минск">Минск</option>
                    <option value="Брест">Брест</option>
                    <option value="Гомель">Гомель</option>
                    <option value="Гродно">Гродно</option>
                    <option value="Могилев">Могилев</option>
                    <option value="Витебск">Витебск</option>
                </select>
                <label htmlFor="subject">Тема обращения</label>
                <select id="subject" name="subject" value={subject} onChange={(event)=> setSubject(event.target.value)} required>
                    <option value="">Выберите тему обращения</option>
                    <option value="Качество продукции">Качество продукции</option>
                    <option value="Обслуживание в ресторане">Обслуживание в ресторане</option>
                    <option value="Доставка заказа">Доставка заказа</option>
                    <option value="Сайт или приложение">Сайт или приложение</option>
                    <option value="Другое">Другое</option>
                </select>
                <label htmlFor="message">Ваш отзыв</label>
                <textarea id="message" name="message" placeholder="Введите ваш отзыв" rows="5" required value={ titleMessage} onChange={(event)=> setTitleMessage(event.target.value)}>
                </textarea>
                <button className = 'btn-feedback' onClick={sendPersondata}>Отправить</button>
                </form>
            </div>
        </div>
    )
}