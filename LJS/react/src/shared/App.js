import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
//import { Home, About, Posts, Test, Login, Join, FindEmail } from 'pages'    // 코드 스플리팅 미적용
import { Home, About, Search, Test, Login, Join, FindPassword } from 'pages/index.async.js'    // 코드 스플리팅 적용
import { GNB } from 'components'
import styled from 'styled-components'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const Body = styled.div`
    padding-top: 5%;
`

// palette에선 primary, secondary, error, warning, info, success 총 6개를 지원함.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#06843A",
        },
        secondary: {
            main: "#5a8b5c"
        }
    }
})

// exact 를 넣는 이유 : / 와 /about 중 입력된 주소와 문자열을 매칭하는데
// /가 겹치기 때문에 정확히 / 인 경우에만 홈으로 가도록

// Switch 컴포넌트를 사용하면 묶여있는 경로 중 가장 먼저 일치하는 경로 하나만
// 보여준다. 즉, Longest Match Rule 방식으로 하자.
class App extends Component {

    render() {

        return (
            <ThemeProvider theme={theme}>
                <GNB/>
                <Body>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/join" component={Join}/>
                    <Route path="/find/email" component={FindPassword}/>
                    <Switch>
                        <Route path="/about-us" component={About}/>
                    </Switch>
                </Body>
            </ThemeProvider>
        )
    }
}

export default App