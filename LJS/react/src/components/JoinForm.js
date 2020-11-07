import React, { useEffect, useRef, useState } from 'react'
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

    const [pwd1, setPwd1] = useState("")
    const [pwd1_error, setPE1] = useState("PASS")

    const [pwd2, setPwd2] = useState("")
    const [pwd2_error, setPE2] = useState("PASS")

    const first_name_field = useRef()
    const second_name_field = useRef()
    const email_field = useRef()
    const pwd1_field = useRef()
    const pwd2_field = useRef()

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
            case "pwd1-input":
                if(myValidator("pwd1", pwd1)){
                    setPE1("PASS")
                }
                else if(pwd1 === ""){
                    setPE1("EMPTY")
                }
                else{
                    setPE1("PASSWORD_NOT_CORRECT")
                }
            break
            case "pwd2-input":
                if(myValidator("pwd2", pwd2)){
                    if(pwd2 !== pwd1){
                        setPE2("PASSWORD_NOT_MATCH")
                    }
                    else{
                        setPE2("PASS")
                    }
                }
                else if(pwd2 === ""){
                    setPE2("EMPTY")
                }
                else {
                    setPE2("PASSWORD_NOT_CORRECT")
                }
            break
        }
    }

    const loginClicked = () => {
        /*fetch("/join", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "firstName" : {firstName},
                "secondName" : {secondName},
                "email" : {email},
                "pwd1" : {pwd1},
                "pwd2" : {pwd2}
            })
        })*/
        first_name_field.current.focus()
        console.log(first_name_field)
    }

    const handleCopy = (e) => {
        e.preventDefault()
    }

    const emailRequest = () => {
        fetch("/email/certification", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(email)
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
                inputRef={first_name_field}
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
                inputRef={second_name_field}
                />

                <Button
                disabled
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
                inputRef={email_field}
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
            error={pwd1_error !== "PASS"} 
            helperText={err_msg[pwd1_error]}
            className= {classes.inputField} 
            id="pwd1-input" 
            size="small" 
            label="비밀번호" 
            variant="outlined"
            type="password"
            onChange={(e) => {
                setPwd1(e.target.value)
            }}
            onPaste={handleCopy}
            onBlur={outFocus}
            inputRef={pwd1_field}
            />
            <TextField 
            required
            error={pwd2_error !== "PASS"} 
            helperText={err_msg[pwd2_error]}
            className= {classes.inputField} 
            id="pwd2-input" 
            size="small" 
            label="비밀번호 확인" 
            variant="outlined"
            onChange={(e) => {
                setPwd2(e.target.value)
            }}
            type="password"
            onPaste={handleCopy}
            onBlur={outFocus}
            inputRef={pwd2_field}
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