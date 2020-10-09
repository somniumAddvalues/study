import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'

// AppContainer = 모듈 리로딩 및 에러 처리를 도와주는 컴포넌트
// production에서 자동으로 비활성화됨
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if(module.hot) {
  module.hot.accept('./client/Root', () => { render(Root)})
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
