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
    },
    TextField: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    loginBt: {
        width: "100%"
    }
}))




const LoginForm = () => {

    const classes = useStyles()

    const [saveChecked, setState] = React.useState(false)

    const handleCheck = () => {
        setState(!saveChecked)
    }

    const loginClicked = () => {
        console.log("로그인 성공!")
    }

    return (
        <Container maxWidth="sm" className= {classes.mainContainer}>
            <h1>로그인</h1>

            <TextField className= {classes.inputField} id="outlined-basic" label="이메일" variant="outlined"/>
            <TextField className= {classes.inputField} id="outlined-basic" label="패스워드" variant="outlined"/>

            <Box className={classes.TextField}>
                <FormControlLabel
                    control={ 
                        <Checkbox 
                            checked={saveChecked} 
                            onChange= {handleCheck} 
                            color="black"/> 
                        }
                    label="아이디 기억하기"
                />
                <Link href="/find/email">
                    기억이 안나시나요?
                </Link>
            </Box>

            <Button
                className={classes.loginBt}
                variant="contained"
                onClick={loginClicked}
                aria-label="Login"
                color="primary"
                >
            로그인
            </Button>

            <Link href="/join">
                계정이 없으신가요? 회원가입 ㄱㄱ
            </Link>

        </Container>
    )
}

export default LoginForm