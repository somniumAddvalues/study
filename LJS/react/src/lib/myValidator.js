import validator from 'email-validator'

const myPasswordValidator = (text) => {
    if(text.length < 8)
        return false

    return true
}

const myNameValidator = (text) => {
    if(text.length < 1)
        return false

    return true
}

export const myValidator = (target, text1, text2) => {
    
    const err_msg = [
        {err: "INIT", msg: ""},
        {err: "PASS", msg: ""},
        {err: "EMPTY", msg: "필수 입력입니다"},
        {err: "EMAIL_NOT_CORRECT",  msg: "이메일 형식이 올바르지 않습니다"},
        {err: "PASSWORD_NOT_CORRECT", msg: "비밀번호는 8자리 이상입니다"},
        {err: "PASSWORD_NOT_MATCH", msg: "동일한 비밀번호를 입력해 주세요"},
    ]

    switch(target){
        case "first-name":
            if(myNameValidator(text1)){
                return err_msg[1]
            }
            else{
                return err_msg[2]
            }
        case "second-name":
            if(myNameValidator(text1)){
                return err_msg[1]
            }
            else{
                return err_msg[2]
            }
        case "email":
            if(validator.validate(text1)){
                return err_msg[1]
            }
            else if(text1 === ""){
                return err_msg[2]
            }
            else{
                return err_msg[3]
            }
        case "pwd1":
            if(myPasswordValidator(text1)){
                return err_msg[1]
            }
            else if(text1 === ""){
                return err_msg[2]
            }
            else{
                return err_msg[4]
            }
        case "pwd2":
            if(myPasswordValidator(text2)){
                if(text1 === text2)
                    return err_msg[1]
                else
                    return err_msg[5]
            }
            else if(text1 === ""){
                return err_msg[2]
            }
            else{
                return err_msg[4]
            }
    }
}