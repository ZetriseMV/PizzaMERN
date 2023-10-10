import mongoose from "mongoose" 

const PurchaseSchema = new mongoose.Schema({
    valuePurchase:[{
        typeMeal:String,
        titlePizza:String,
        characPizza:String,
        pricePizza:Number,
        imagepizzaUrl:String,
        _id:String
    }],
    fullPrice:{
        type:Number,
        required:true,
        default:0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,//чтобы хранить id пользователя
        ref: "User"
    }
})

export default mongoose.model('Purchase',PurchaseSchema)