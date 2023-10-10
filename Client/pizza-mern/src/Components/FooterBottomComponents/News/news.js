import {React,useEffect,useState} from 'react'
import axios from 'axios'
import NewsList from '../../ArrayListHelper/news/newsList'
import './news.css'

export default function News({ news,setNews,isAdmin }){
    
    useEffect(() => {
        axios
            .get('http://localhost:1212/getAllnews')
            .then((response) => {
                setNews(response.data.news)
            })
            .catch((err) => {
                console.log(err)
            })
    },[]) 
    return (
        <div className = 'news-main'>
            <h3>Новости</h3>
            <NewsList news = {news} isAdmin = {isAdmin} setNews = {setNews}/> 
        </div>
    )
}