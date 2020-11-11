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
        //border: "1px solid black",
        flexDirection: "column",
        alignItems: "center",
    },
    inputField: {
        width: "100%",
        marginBottom: "1%",
    },
    TextField: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: "2%",
    },
    textPWD: {
        color: "black",
        fontWeight: "bold",
        "&:hover": {
            textDecoration: 'none'
        },
    },
    textJoin: {
        fontWeight: "bold",
        "&:hover": {
            textDecoration: 'none'
        },
    },
    loginBt: {
        width: "100%"
    }
}))




const LoginForm = () => {

    const classes = useStyles()

    const [saveChecked, setState] = React.useState(false)
    const [email, setEmail] = React.useState("")

    const handleCheck = () => {
        setState(!saveChecked)
    }

    const handleChange = (event) => {
        setEmail(event.target.value)
        console.log(event.target)
    }

    const loginClicked = (a, b) => {
        alert("로그인 성공!")
    }

    return (
        <Container maxWidth="sm" className= {classes.mainContainer}>
            <h1>로그인</h1>

            <TextField 
            error={email === ""} 
            helperText={email === "" ? "입력란이 공백입니다" : ""}
            className= {classes.inputField} id="email-input" label="이메일" variant="outlined" value={email} onChange={handleChange}/>
            <TextField className= {classes.inputField} id="password-input" label="패스워드" variant="outlined"/>

            <Box className={classes.TextField}>
                {/* <FormControlLabel
                    control={ 
                        <Checkbox 
                            checked={saveChecked} 
                            onChange= {handleCheck} 
                            color="default"/> 
                        }
                    label="아이디 기억하기"
                /> */}
                <Link 
                    className={classes.textPWD}
                    href="/find/email"
                    >
                    비밀번호 찾기
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
            <div>
                <span>아직 더함의 Addee가 아니신가요?&nbsp;&nbsp;&nbsp;</span>
                <Link 
                    className={classes.textJoin}
                    href="/join"
                    >
                    회원가입
                </Link>
            </div>
        </Container>
    )
}

export default LoginForm