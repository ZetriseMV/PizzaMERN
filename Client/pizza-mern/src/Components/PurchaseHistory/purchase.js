import {React,useState,useEffect} from 'react' 
import axios from 'axios'
import PurchaseList from '../ArrayListHelper/Purchase/purchaseList'
import ErrorRote from '../errorPage/errorPage'
import './purchase.css'

export default function PurchaseHistory({ isAuth }){
    const [purchaseUserArr,setPurchaseUserArr] = useState([])
    const [totalpricePurchase,setTotalpricePurchase] = useState(0)
    const token =  localStorage.getItem("jwtToken");
    useEffect(() => {
        axios
            .get('http://localhost:1212/gethistory/client',{
                headers: {
                    authorization: "Bearer " + token,
                },
            })
            .then((response) => {
                setPurchaseUserArr(response.data[0].valuePurchase)
                setTotalpricePurchase((prev) => prev + response.data[0].fullPrice)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    return (
        <div className='history_header'>
            {
                // проверяем, является ли пользователь авторизованным
                isAuth ? (
                    // если да, то рендерим историю покупок
                    <div>
                    <div className="text-history_q2">
                        <div className="history_text">
                        <h3>История ваших покупок</h3>
                        </div>
                        <div className="price">
                        <h3>Итоговая цена {totalpricePurchase}</h3>
                        </div>
                    </div>
                    <div className="purchase-main">
                        <PurchaseList purchaseUserArr={purchaseUserArr} />
                    </div>
                    </div>
                ) : (
                    // если нет, то рендерим сообщение об ошибке
                    <div>
                        <h2>Вы не авторизованы</h2>
                        <ErrorRote/>
                    </div>
                )
            }
        </div>
    )
}