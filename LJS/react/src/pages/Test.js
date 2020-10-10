import React, { useState } from 'react'

const Test = () => {
    // useState의 인자는 상태의 기본 값, 배열의 첫 번째 원소는 현재 상태,
    // 두 번째 인자는 setter 함수이다.
    const [message, setMessage] = useState("")

    const click = () => {
        fetch("/test")
        .then(res => res.text())
        .then(msg => {
            setMessage(msg)
        })
    }

    return (
        <div>
            <button onClick={click}>Test</button>
            <p>{message}</p>
        </div>
    )
}

export default Test