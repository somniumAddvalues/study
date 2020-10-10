import React, {Component} from 'react'
<<<<<<< HEAD:LJS/react/src/shared/App.js
import {Route, Switch} from 'react-router-dom'
import {Home, About, Posts} from 'pages'    // 코드 스플리팅 미적용
import {Menu} from 'components'
=======
import { Route, Switch } from 'react-router-dom'
import { Home, About, Posts } from 'pages'    // 코드 스플리팅 미적용
import { Menu } from 'components'
>>>>>>> d73834b5bd15afe965e2ab444879c68e4548b5e4:LJS/src/shared/App.js

// exact 를 넣는 이유 : / 와 /about 중 입력된 주소와 문자열을 매칭하는데
// /가 겹치기 때문에 정확히 / 인 경우에만 홈으로 가도록

// Switch 컴포넌트를 사용하면 묶여있는 경로 중 가장 먼저 일치하는 경로 하나만
// 보여준다. 즉, Longest Match Rule 방식으로 하자.
class App extends Component {

    state = {
        SplitMe: null
    }

    showSplitMe = () => {
        import('components/SplitMe').then(({default: Component}) => {

            // setState가 실행되면 자동으로 리렌더링 된다.
            this.setState({
                SplitMe: Component
            })
        })
    }

    render() {
<<<<<<< HEAD:LJS/react/src/shared/App.js
        const {SplitMe} = this.state
=======
        const { SplitMe } = this.state
>>>>>>> d73834b5bd15afe965e2ab444879c68e4548b5e4:LJS/src/shared/App.js

        return (
            <div>
                <Menu/>
<<<<<<< HEAD:LJS/react/src/shared/App.js
                {SplitMe && <SplitMe/>}
=======
                { SplitMe && <SplitMe/>}
>>>>>>> d73834b5bd15afe965e2ab444879c68e4548b5e4:LJS/src/shared/App.js
                <button onClick={this.showSplitMe}>ClickMe</button>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        )
    }
}

export default App