import React from 'react'
import queryString from 'query-string'


// JSX 내에서 조건부 연산 시엔 보통 람다식이나 && 를 사용
// if 문을 사용하려면 함수 내에서 조건 결과를 return 시켜줘야함.
const About = ({location, match}) => {
    const query = queryString.parse(location.search)
    console.log(query)

    const detail = query.detail === 'true'

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blablah'}
        </div>
    )
}

export default About