import validator from 'email-validator'


export const myValidator = (target, text) => {
    
    switch(target){
        case "first-name":

        break
        case "second-name":

        break
        case "email":
            return validator.validate(text)
    }
}