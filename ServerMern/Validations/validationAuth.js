import {body} from "express-validator"

export const registerValidation = [//проверка регистрации
    body('email','Формат email непарвильный').isEmail(),
    body('password','Неправильный формат пароля').isLength({ min:5 }),
    body('fullName','Неправильный формат длины имени').isLength({ min:4 })
]
export const loginValidation = [//проверка логина пользователя
    body('email','Формат email непарвильный').isEmail(),
    body('password','Неправильный формат пароля').isLength({ min:5 })
]

export const CreateNewpostValidation = [//проверка новости 
    body('title','Введите заголовок статьи').isLength({ min:6,max:30 }).isString(),
    body('textBody','Введите текст статьи').isLength({ min:15,max:50 }).isString(),
]

export const CreatePizzaValidation = [//проверка создания пиццы
    body('typeMeal','Введите корректную характеристику,например(пицца,Курица,Картофель)').isString(),
    body('titlePizza','Введите название пиццы').isLength({ min:3,max:10 }).isString(),
    body('characPizza','Введите описание пиццы').isLength({ max:15 }).isString(),
    body('pricePizza','Введите цену пиццы').isFloat({ min: 6 }),
    body('imagepizzaUrl','Неправильный формат изображения').isString()
]
export const CreateReviewValidation = [ //проверка отзыва (для связи с мои email)
    body('email','Формат email непарвильный').isEmail(),
    body('telephone','Неправильный формат номера')
    .isMobilePhone(['ru-RU', 'be-BY']).withMessage('Номер должен быть в формате +7XXXXXXXXXX или +375XXXXXXXXX')
        .isLength({ min: 12, max: 13 }).withMessage('Номер должен содержать от 12 до 13 цифр'),
    body('fullname','Неправильный формат длины имени').isLength({ min:4 }),
    body('titleMessage','Введите отзыв').isString() 
]