import React from 'react'

// location.pathname은 브라우저가 현재 위치하는 경로로 모두 똑같음
// match.path는 코드가 읽혔을 때의 실제 코드 상의 주소
// match.url은 코드가 읽혔을 때의 실제 코드 상의 주소지만 변수에 값이 들어간 채로 나옴
const Post = ({location, match}) => {
    return (
        <div>
            포스트 {match.params.id}
            <p>location.pathname {location.pathname}</p>
            <p>match.path {match.path}</p>
            <p>match.url {match.url}</p>
        </div>
    )
}

export default Post