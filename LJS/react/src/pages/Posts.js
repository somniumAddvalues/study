import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Post} from 'pages'    //현재 폴더지만 코드 스플리팅 과정에서 페이지를 불러오는 방식이 통일되어야 함?


// match.url 은 현재 라우트 경로를 담고 있음
// 첫 번째 Route 경로는 id가 지정되지 않았을 경우 -> 인라인 렌더링
// 두 번째 Route 경로는 id가 지정되었을 경우 -> 현재는 포스트 id만 바꿔서 출력
const Posts = ({location, match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/1`}>Post #1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>Post #2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/3`}>Post #3</Link>
                </li>
                <li>
                    <Link to={`${match.url}/4`}>Post #4</Link>
                </li>
            </ul>
            <p>location.pathname {location.pathname}</p>
            <p>match.path {match.path}</p>
            <p>match.url {match.url}</p>
            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    )
}

export default Posts