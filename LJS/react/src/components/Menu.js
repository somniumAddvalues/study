import React from 'react'
//import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

// Link 컴포넌트를 쓰면 <a>태그를 쓰지 않고(새로고침 되지 않고) 
// 다른 라우트로 이동 가능하다.

// NavLink는 설정된 URL이 활성화 시에 스타일을 넣어줄 수 있다.
const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu