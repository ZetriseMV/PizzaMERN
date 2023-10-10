import PizzasSchema from '../SchemeModels/quantpizza.js'

export const getPizzas = async (req,res) => {
    try {
        const pizzas = await PizzasSchema.find()
        res.json(pizzas)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось загрузить товар',
            success:false
        })
    }
}
export const addPizza = async (req,res) => {
    try {
        const { typeMeal,titlePizza,characPizza,pricePizza,imagepizzaUrl } = req.body;
        const goodCandidate = await PizzasSchema.findOne({ titlePizza }) 
        if(goodCandidate) {
            return res.status(401).json({
                message:'Пицца уже существует',
                success:false
            })
        } 
        const pizzaDoc = await new PizzasSchema({
            typeMeal:typeMeal,
            titlePizza:titlePizza,
            characPizza:characPizza,
            pricePizza:pricePizza,
            imagepizzaUrl:imagepizzaUrl
        })
        const newpizza = await pizzaDoc.save()
        if(newpizza) {
            res.status(200).json({
                success:true,
                message:'Новый товар был добавлен'
            })
        }  
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Товар не был добавлен',
            success:false
        })
    }
}
export const delPizzas = async(req,res) => {
    try {
        const pizzaId = req.params.id;
        const pizzaRemove = await PizzasSchema.findOneAndDelete(
            {
                _id:pizzaId
            }
        )
        if(!pizzaRemove) {
            return res.status(500).json({
                message:'Товар не найден',
                success:false
            })
        }
        res.json({
            message:'товар был удален'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message:'не удалось удалить товар',
            success:false
        })
    }
}
