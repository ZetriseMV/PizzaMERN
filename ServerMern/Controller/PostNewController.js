import PostNewSchema from '../SchemeModels/postnew.js'
import mongoose from "mongoose"

export const getAllnews = async(req,res) => {
    try{
        const news = await PostNewSchema.find().populate('user',"fullName").exec()//связывание таблиц чтобы вернулся user как объект
        res.status(201).json({
            news,
            message:'Новости'
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'Не удалось получить статьи' 
        })
    }
}
export const createNews = async (req,res) => {
    try{
        const { title,textBody } = req.body;
        const postCandidate = await PostNewSchema.findOne({ title })
        if(postCandidate) {
            return res.status(400).json({
                message:'Такая новость уже существует'
            })
        }
        const docNew = new PostNewSchema({
            title:title,
            textBody:textBody,
            user:req.userId
        })
        const newPost = docNew.save();
        const  AllPosts = await PostNewSchema.find()
        if(newPost) {
            res.status(201).json({
                AllPosts,
                message:'Новость успешно создана'
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'Не удалось создать статью'
        })
    }
}
export const deleteNew = async (req,res) => {
    try {
        const postId = req.params.id;
        const removePost = await PostNewSchema.findOneAndDelete(
            {
                _id:postId
            }
        )
        if(!removePost){
            res.status(500).json({
                message:'Статья не была удалена'
            })
        }
        res.status(201).json({
            success:true,
            message:'Статья была удалена из базы данных'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось удалить статью'
        })
    }
}

export const updateNew = async (req,res) => {
    try {
        const { title,textBody } = req.body;
        const postId = req.params.id;
        await PostNewSchema.updateOne(
            {
                _id:postId,
            },
            {
                title:title,
                textBody:textBody,
                user:req.userId
            }
        )
        res.status(201).json({
            message:'Статья успешно обновлена'
        })
    } catch (err) {
        res.status(500).json({
            message:'Не удалось обновить статью'
        })
    }
}

