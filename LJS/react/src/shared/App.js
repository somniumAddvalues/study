import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, About, Posts, Test } from 'pages'    // 코드 스플리팅 미적용
import { GNB } from 'components'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

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
        const { SplitMe } = this.state

        return (
            <Wrapper>
                <GNB/>
                { SplitMe && <SplitMe/>}
                <button onClick={this.showSplitMe}>ClickMe</button>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Test/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Wrapper>
        )
    }
}

export default App