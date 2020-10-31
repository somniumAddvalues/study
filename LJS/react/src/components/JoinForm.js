import React, { useEffect, useState } from 'react'
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
    const [first_error_check, setFEC] = useState(false)
    const [first_error_msg, setFEM] = useState("")

    const [second_name, setSecond] = useState("")
    const [second_error_check, setSEC] = useState(false)
    const [second_error_msg, setSEM] = useState("")

    const [email, setEmail] = useState("")
    const [email_error_check, setEEC] = useState(false)
    const [email_error_msg, setEEM] = useState("")

    const [password, setPassword] = useState("")
    const [password_error_check, setPEC] = useState(false)
    const [password_error_msg, setPEM] = useState("")

    const [re_password, setRePassword] = useState("")
    const [re_password_error_check, setRPEC] = useState(false)
    const [re_password_error_msg, setRPEM] = useState("")

    const loginClicked = () => {
        alert("회원 가입 성공!")
    }

    const outFocus = (event) => {

        switch(event.target.id){
            case "first-name-input":
                if(first_name === ""){
                    setFEC(true)
                    setFEM("입력란이 공백입니다")
                }
                else{
                    setFEC(false)
                }
            break;
            case "second-name-input":
                if(second_name === ""){
                    setSEC(true)
                    setSEM("입력란이 공백입니다")
                }
                else{
                    setSEC(false)
                }
            break;
            case "email-input":
                if(email === ""){
                    setEEC(true)
                    setEEM("입력란이 공백입니다")
                }
                else{
                    setEEC(false)
                }
            break
            case "password-input":
                if(password === ""){
                    setPEC(true)
                    setPEM("입력란이 공백입니다")
                }
                else{
                    setPEC(false)
                }
            break
            case "re-password-input":
                if(re_password === ""){
                    setRPEC(true)
                    setRPEM("입력란이 공백입니다")
                }
                else{
                    setRPEC(false)
                }
            break
        }
    }

    return (
        <Container maxWidth="sm" className= {classes.mainContainer}>
            <h1>회원 가입</h1>

            <Box className={classes.NameField}>
                <TextField 
                required
                error={first_error_check} 
                helperText={first_error_msg}
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
                error={second_error_check} 
                helperText={second_error_msg}
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
                error={email_error_check} 
                helperText={email_error_msg}
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
                >
                인증 요청
                </Button>
            </Box>
            <TextField 
            required
            error={password_error_check} 
            helperText={password_error_msg}
            className= {classes.inputField} 
            id="password-input" 
            size="small" 
            label="패스워드를 입력해 주세요" 
            variant="outlined"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            onBlur={outFocus}
            />
            <TextField 
            required
            error={re_password_error_check} 
            helperText={re_password_error_msg}
            className= {classes.inputField} 
            id="re-password-input" 
            size="small" 
            label="패스워드를 한번 더 입력해 주세요" 
            variant="outlined"
            onChange={(e) => {
                setRePassword(e.target.value)
            }}
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