import mongoose from "mongoose"


const PostNewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    textBody:{
        type:String,
        required:true
    },
    user:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, //чтобы хранить id пользователя
        ref:'User',
    },
},{
    timestamps:true,
})

export default mongoose.model('Post',PostNewSchema)