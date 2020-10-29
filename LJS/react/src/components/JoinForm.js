import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Link from '@material-ui/core/Link'



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

    const loginClicked = () => {
        alert("회원 가입 성공!")
    }

    return (
        <Container maxWidth="sm" className= {classes.mainContainer}>
            <h1>회원 가입</h1>

            <Box className={classes.NameField}>
                <TextField className= {classes.inputField} id="first-name-input" size="small" label="성" variant="outlined"/>
                <TextField className= {classes.inputField} id="second-name-input" size="small" label="이름" variant="outlined"/>
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
                <TextField className= {classes.inputField} id="email-input" size="small" label="이메일" variant="outlined"/>
                <Button
                className={classes.varifyEmailBt}
                variant="contained"
                aria-label="Email Varify"
                color="primary"
                >
                인증 요청
                </Button>
            </Box>
            <TextField className= {classes.inputField} id="password-input" size="small" label="패스워드를 입력해 주세요" variant="outlined"/>
            <TextField className= {classes.inputField} id="re-password-input" size="small" label="패스워드를 한번 더 입력해 주세요" variant="outlined"/>

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