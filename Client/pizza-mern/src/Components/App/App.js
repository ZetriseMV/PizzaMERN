import './App.css'
import {React,useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainAlign from '../TopNavigation/MainAlign/mainalign'
import Delivery from '../TopNavigation/Delivery/delivery'
import DeskNavigate from '../TopNavigation/desktopNavigate/desktop'
import Bottom from '../bottomComponent/bottom'
import About from '../FooterBottomComponents/About/about'
import News from '../FooterBottomComponents/News/news'
import Feedback from '../FooterBottomComponents/Feedback/feedback'
import GetMoney from '../FooterBottomComponents/Getmoney/getmoney'
import MainPizza from '../MainComponent/mainpizza'
import Register from '../Register/register'
import ErrorRote from '../errorPage/errorPage'
import BasketGoods from '../Basket/basket'
import AdminPart from '../AdminPart/adminPart'
import AdminPizza from '../AdminPart/PizzaAdmindel/pizzaAdmin'
import AdminUsers from '../AdminPart/AdminUsers/adminUsers'
import AddPizza from '../AdminPart/addPizzaAdm/addPizza'
import AddNew from '../AdminPart/AddNew/addNew'
import PurchaseHistory from '../PurchaseHistory/purchase'

export default function App(){
    const [countMoney,setcountMoney] = useState(0)/* деньги в компоненте GetMoney */
    const [isAuth,setIsAuth] = useState(false)/* проверка авторизации пользователя */
    const [selectGood,setSelectGood] = useState([])/* все пиццы в корзине */
    const [pizzas,setPizzas] = useState([])/* все пиццы из базы данных */
    const [isAdmin,setIsAdmin] = useState(false)
    const [news,setNews] = useState([])//все новости из базы данных
    const [priceBasket,setPriceBasket] = useState(0)
    const moneyTrack = () => {
        setcountMoney(countMoney + 5)
    }

    return (
        <div> 
        {isAdmin ? (
            <Router>
                <AdminPart/>{/* верхние ссылки от админа */}
                <Routes>
                    <Route exact path="/"></Route>
                    <Route path="/adminSession/pizza" element={<AdminPizza pizzas = {pizzas} setPizzas={setPizzas} isAdmin = {isAdmin}/>}/>{/* удаление пиццы от админа */}
                    <Route path="/adminSession/users" element={<AdminUsers/>}/>{/* удаление пользователей от амина */}
                    <Route path = "/adminSession/addpizza" element = {<AddPizza setPizzas = {setPizzas}/>}/> {/* добавление пиццы от админа */}
                    <Route path = "/adminSession/addnew" element = {<AddNew  news = {news} setNews = {setNews} isAdmin = {isAdmin}/>}/>{/* удаление,добавление,редактирование статьи */}
                </Routes>
            </Router>
        ) : (
            <Router> 
                <MainAlign isAdmin={isAdmin} setIsAdmin={setIsAdmin} countMoney={countMoney} isAuth={isAuth} setIsAuth={setIsAuth} pizzas={pizzas} selectGood={selectGood} setSelectGood={setSelectGood}/> {/* компонент с баланосм и навигацией */} 
                <DeskNavigate priceBasket = {priceBasket}/>{/* компонент с кнопкой корзина и навигацией */} 
                <Routes> 
                    <Route path="/" element={<MainPizza isAdmin = {isAdmin} selectGood={selectGood} setSelectGood={setSelectGood} pizzas={pizzas} setPizzas={setPizzas}/>}/> {/* компонент со слайдером и всеми пиццами (главный копомнент) */} 
                    <Route path="/:foodType" element={<MainPizza selectGood={selectGood} setSelectGood={setSelectGood} pizzas={pizzas} setPizzas={setPizzas} isAdmin = {isAdmin}/>}/> {/* для фильтрации при поиске */}
                    <Route path="/basket" element={<BasketGoods setSelectGood = {setSelectGood} countMoney = {countMoney} selectGood={selectGood} isAuth={isAuth} priceBasket = {priceBasket} setPriceBasket = {setPriceBasket}/>}/> {/* корзина товаров */} 
                    <Route path="/moreinfo" element={<Delivery/>}/>   {/* подробнее в доставке */} 
                    <Route path="/about" element={<About/>}/>    {/* о нас в footer низ */} 
                    <Route path="/purchasehist" element = {<PurchaseHistory isAuth = {isAuth}/>}></Route>
                    <Route path="/news" element={<News news = {news} setNews = {setNews} isAdmin = {isAdmin}/>}/>{/* новости в footer низ */} 
                    <Route path="/feedback" element={<Feedback/>}/>    {/* обратная связь в footer низ */} 
                    <Route path="/getmoney" element={<GetMoney moneyTrack={moneyTrack} countMoney={countMoney}/>}/> {/* отзыв в footer низ */} {/* баланс в пропсах */} 
                    <Route path="/register" element={<Register/>}/> {/* регистрация */}
                    <Route path="*" element={<ErrorRote/>}/>  {/* ошибка при неверном пути */}
                </Routes> 
                <Bottom/> {/* нижний компонент о нас,оставить отзыв и тд */}
            </Router> 
        )}
    </div>
    )
}