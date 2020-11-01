import React, { useEffect, useState } from 'react'
import {myValidator} from 'lib/myValidator'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'
import { FreeBreakfastOutlined } from '@material-ui/icons'



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        border: "1px solid black",
        flexDirection: "column",
        alignItems: "center",
    },
    inputField: {
        width: "100%",
        marginBottom: "10px",
        marginRight: "5px",
    },
    TextField: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    NameField: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    EmailField: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    loginBt: {
        width: "100%"
    },
    varifyNameBt: {
        width: "35%"
    },
    varifyEmailBt: {
        width: "20%"
    },
}))


const JoinForm = () => {

    const classes = useStyles()

    const [first_name, setFirst] = useState("")
    const [first_error, setFE] = useState("PASS")

    const [second_name, setSecond] = useState("")
    const [second_error, setSE] = useState("PASS")

    const [email, setEmail] = useState("")
    const [email_error, setEE] = useState("PASS")

    const [password, setPassword] = useState("")
    const [password_error, setPE] = useState("PASS")

    const [re_password, setRePassword] = useState("")
    const [re_password_error, setRPE] = useState("PASS")

    const loginClicked = () => {
        alert("회원 가입 성공!")
    }

    const handleCopy = (e) => {
        e.preventDefault()
    }

    const err_msg = {
        PASS: "",
        EMPTY: "필수 입력입니다",
        EMAIL_NOT_CORRECT: "이메일 형식이 올바르지 않습니다",
        PASSWORD_NOT_CORRECT: "비밀번호는 8자리 이상입니다",
        PASSWORD_NOT_MATCH: "동일한 비밀번호를 입력해 주세요",
    }

    const outFocus = (event) => {

        switch(event.target.id){
            case "first-name-input":
                if(first_name === ""){
                    setFE("EMPTY")
                }
                else{
                    setFE("PASS")
                }
            break;
            case "second-name-input":
                if(second_name === ""){
                    setSE("EMPTY")
                }
                else{
                    setSE("PASS")
                }
            break;
            case "email-input":
                if(myValidator("email", email)){
                    setEE("PASS")
                }
                else if(email === ""){
                    setEE("EMPTY")
                }
                else{
                    setEE("EMAIL_NOT_CORRECT")
                }
            break
            case "password-input":
                if(myValidator("password", password)){
                    setPE("PASS")
                }
                else if(password === ""){
                    setPE("EMPTY")
                }
                else{
                    setPE("PASSWORD_NOT_CORRECT")
                }
            break
            case "re-password-input":
                if(re_password === ""){
                    setRPE("EMPTY")
                }
                else if(re_password !== password){
                    setRPE("PASSWORD_NOT_MATCH")
                }
                else{
                    setRPE("PASS")
                }
            break
        }
    }

    const emailRequest = () => {
        fetch("/test", {
            method: "POST",
            headers: { 'Content-Type': 'application/text' },
            body: email,
        })
        .then(res => res.text())
        .then(msg => {
            console.log(msg)
        })
    }

    return (
        <Container maxWidth="sm" className= {classes.mainContainer}>
            <h1>회원 가입</h1>

            <Box className={classes.NameField}>
                <TextField 
                required
                error={first_error !== "PASS"} 
                helperText={err_msg[first_error]}
                className= {classes.inputField} 
                id="first-name-input" 
                size="small" 
                label="성" 
                variant="outlined"
                aria-label="First Name"
                onChange={(e) => {
                    setFirst(e.target.value)
                }}
                onBlur={outFocus}
                />

                <TextField 
                required
                error={second_error !== "PASS"} 
                helperText={err_msg[second_error]}
                className= {classes.inputField} 
                id="second-name-input" 
                size="small" 
                label="이름" 
                variant="outlined"
                aria-label="Second Name"
                onChange={(e) => {
                    setSecond(e.target.value)
                }}
                onBlur={outFocus}
                />

                <Button
                className={classes.varifyNameBt}
                variant="contained"
                aria-label="Name Varify"
                color="primary"
                >
                본인 인증
                </Button>
            </Box>
            <Box className={classes.EmailField}>
                <TextField 
                required
                error={email_error !== "PASS"} 
                helperText={err_msg[email_error]}
                className= {classes.inputField} 
                id="email-input" 
                size="small" 
                label="이메일" 
                variant="outlined"
                aria-label="Email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                onBlur={outFocus}
                />

                <Button
                className={classes.varifyEmailBt}
                variant="contained"
                aria-label="Email Varify"
                color="primary"
                onClick={emailRequest}
                >
                인증 요청
                </Button>
            </Box>
            <TextField 
            required
            error={password_error !== "PASS"} 
            helperText={err_msg[password_error]}
            className= {classes.inputField} 
            id="password-input" 
            size="small" 
            label="비밀번호" 
            variant="outlined"
            type="password"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            onPaste={handleCopy}
            onBlur={outFocus}
            />
            <TextField 
            required
            error={re_password_error !== "PASS"} 
            helperText={err_msg[re_password_error]}
            className= {classes.inputField} 
            id="re-password-input" 
            size="small" 
            label="비밀번호 확인" 
            variant="outlined"
            onChange={(e) => {
                setRePassword(e.target.value)
            }}
            type="password"
            onPaste={handleCopy}
            onBlur={outFocus}
            />

            <Button
                className={classes.loginBt}
                variant="contained"
                onClick={loginClicked}
                aria-label="Login"
                color="primary"
                >
            회원 가입
            </Button>

        </Container>
    )
}

export default JoinForm