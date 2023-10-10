import mongoose from "mongoose"

const RoleSchema = new mongoose.Schema({
    value:{
        type:String,
        unique:true,//есть всего 2 роли админ и user
        default:"user"
    }
})

export default mongoose.model('Role',RoleSchema)