import validator from 'email-validator'

const myPasswordValidator = (text) => {
    if(text.length < 8)
        return false

    return true
}

export const myValidator = (target, text) => {
    
    switch(target){
        case "first-name":

        break
        case "second-name":

        break
        case "email":
            return validator.validate(text)
        case "pwd1":
            return myPasswordValidator(text)
        case "pwd2":
            return myPasswordValidator(text)
    }
}