import React, { useEffect, useRef, useState } from 'react'
import {myValidator} from 'lib/myValidator'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        //border: "1px solid black",
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
    const [first_error, setFE] = useState({err: "INIT", msg: ""})

    const [second_name, setSecond] = useState("")
    const [second_error, setSE] = useState({err: "INIT", msg: ""})

    const [email, setEmail] = useState("")
    const [email_error, setEE] = useState({err: "INIT", msg: ""})

    const [pwd1, setPwd1] = useState("")
    const [pwd1_error, setPE1] = useState({err: "INIT", msg: ""})

    const [pwd2, setPwd2] = useState("")
    const [pwd2_error, setPE2] = useState({err: "INIT", msg: ""})

    // input field 들의 레퍼런스 배열 (왼쪽 위부터 0, 1, 2, 3, 4)
    const fields = useRef([])

    // 커서 아웃될 때마다 유효성 검사
    const outFocus = (event) => {

        switch(event.target.id){
            case "first-name-input":
                setFE(myValidator("first-name", first_name))
            break;
            case "second-name-input":
                setSE(myValidator("second-name", second_name))
            break;
            case "email-input":
                setEE(myValidator("email", email))
            break
            case "pwd1-input":
                setPE1(myValidator("pwd1", pwd1))
            break
            case "pwd2-input":
                setPE2(myValidator("pwd2", pwd1, pwd2))
            break
        }
    }

    // 입력 시마다 유효성 검사
    useEffect(() => {
        if(first_error.err !== "INIT")
            setFE(myValidator("first-name", first_name))
        if(second_error.err !== "INIT")
            setSE(myValidator("second-name", second_name))
        if(email_error.err !== "INIT")
            setEE(myValidator("email", email))
        if(pwd1_error.err !== "INIT")
            setPE1(myValidator("pwd1", pwd1))
        if(pwd2_error.err !== "INIT")
            setPE2(myValidator("pwd2", pwd1, pwd2))
    }, [first_name, second_name, email, pwd1, pwd2])

    const loginClicked = () => {
        if(first_error.err !== "PASS"){
            setFE(myValidator("first-name", first_name))
            fields.current[0].focus()
            return
        }
        else if(second_error.err !== "PASS"){
            setSE(myValidator("second-name", second_name))
            fields.current[1].focus()
            return
        }
        else if(email_error.err !== "PASS"){
            setEE(myValidator("email", email))
            fields.current[2].focus()
            return
        }
        else if(pwd1_error.err !== "PASS"){
            setPE1(myValidator("pwd1", pwd1))
            fields.current[3].focus()
            return
        }
        else if(pwd2_error.err !== "PASS"){
            setPE2(myValidator("pwd2", pwd1, pwd2))
            fields.current[4].focus()
            return
        }
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
                error={first_error.err !== "PASS" && first_error.err !== "INIT"} 
                helperText={first_error.msg}
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
                inputRef={ref=>fields.current.push(ref)}
                />

                <TextField 
                required
                error={second_error.err !== "PASS" && second_error.err !== "INIT"} 
                helperText={second_error.msg}
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
                inputRef={ref=>fields.current.push(ref)}
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
                error={email_error.err !== "PASS" && email_error.err !== "INIT"} 
                helperText={email_error.msg}
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
                inputRef={ref=>fields.current.push(ref)}
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
            error={pwd1_error.err !== "PASS" && pwd1_error.err !== "INIT"} 
            helperText={pwd1_error.msg}
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
            inputRef={ref=>fields.current.push(ref)}
            />
            <TextField 
            required
            error={pwd2_error.err !== "PASS" && pwd2_error.err !== "INIT"} 
            helperText={pwd2_error.msg}
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
            inputRef={ref=>fields.current.push(ref)}
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