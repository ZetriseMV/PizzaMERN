import {React,useState,useEffect} from 'react'
import OneNew from '../news/OneNew'
import './newsList.css'

export default function NewsList({ news,setNews,isAdmin }){
    return (
        <div className='main-news'>
            {news.map((item, index) => (
                <OneNew key={index} {...item}
                    news = {news}
                    setNews = {setNews}
                    isAdmin = {isAdmin}
                />
            ))}
        </div>
    )
}