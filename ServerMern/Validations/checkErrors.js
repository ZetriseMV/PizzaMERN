import { validationResult } from "express-validator"

//middleware
//получение всех ошибок,если есть возвращаем,если нету то next();

export default function checkErrors(req,res,next)  {
    const errors = validationResult(req)//
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }
    next();
}