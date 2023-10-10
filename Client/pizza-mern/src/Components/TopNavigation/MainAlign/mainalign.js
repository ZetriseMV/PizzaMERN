import {React,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Modal from '../../../Utils/ModelsOpen/modal'
import './mainalign.css'
import SearchFilter from '../../SearchFilter/searchFilter'

export default function MainAlign({ countMoney,isAuth,setIsAuth,pizzas,selectGood,setSelectGood,setIsAdmin,isAdmin }){
    const [isOpened, setIsOpened] = useState(false);

    const openModal = () => {
        setIsOpened(true)
    }



    return (
        <div>
            <div className = "Header">
                <div className = "top-align">
                    <Link className = 'linkMain' to = '/'><h3>Pizza-Mern</h3></Link>
                    <div className = 'moreAlign'>
                        <div className = 'tog'>
                            <span className="material-symbols-outlined">timer</span>
                            <h3>30 минут доставка</h3>
                        </div>
                        <Link className = 'link' to = '/moreInfo'>подробнее</Link>
                    </div>
                    <div className = 'search'>
                        <SearchFilter pizzas = {pizzas} selectGood = {selectGood} setSelectGood = {setSelectGood}/>
                    </div>
                    <div className ='tog'>
                        <span className="material-symbols-outlined">call</span>
                        <h2>7717</h2>
                    </div>
                    <div className='tog'>
                        <Link className = 'linkMoney' to = '/getmoney'>
                            <h3>Баланс {countMoney} Р</h3>
                        </Link>
                    </div>
                    {
                        isAuth ? null : <button className = "btnLogin" onClick={openModal}>Войти</button>
                    }
                    {
                        isAuth == true && 
                        <div className='tog'>
                            <Link className='linkhistory' to = '/purchasehist'>
                                <p>История покупок</p>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <Modal isAdmin = {isAdmin} isOpened = {isOpened} setIsOpened = {setIsOpened} setIsAuth = {setIsAuth} setIsAdmin = {setIsAdmin}/>
        </div>
    )
}
