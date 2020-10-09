import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, About, Posts } from 'pages'
import { Menu } from 'components'

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
            this.setState({
                SplitMe: Component
            })
        })
    }

    render() {
        const { SplitMe } = this.state

        return (
            <div>
                <Menu/>
                { SplitMe && <SplitMe/>}
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