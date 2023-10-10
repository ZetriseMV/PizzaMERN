import mongoose from "mongoose"

const PizzasSchema = new mongoose.Schema({
    typeMeal:{
        type:String,
        required:true
    },
    titlePizza:{
        type:String,
        required:true
    },
    characPizza:{
        type:String,
        required:true
    },
    pricePizza:{
        type:Number,
        required:true
    },
    imagepizzaUrl:{
        type:Object,
        required:true
    }
},{
    timestamps:true,
})

export default mongoose.model('Pizzas',PizzasSchema)