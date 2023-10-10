import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    role:[{
        type:String,
        ref:'Role'
    }],
    email:{
        type:String,
        required:true,
        unique:true
    },
    passwordHash :{
        type:String,
        required:true
    },
}, {
    timestamps:true,//дата создания 
})


export default mongoose.model('User',UserSchema)
