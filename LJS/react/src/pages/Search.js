import React, {useState} from 'react'
//import {Post} from 'pages'    //현재 폴더지만 코드 스플리팅 과정에서 페이지를 불러오는 방식이 통일되어야 함?
import qs from 'query-string'

import {SearchBlock} from 'components'
import Containter from '@material-ui/core/Container'


const Search = ({location, match}) => {

    const {
        query, 
    } = qs.parse(location.search)

    const [pages, setPages] = useState([])

    fetch("/test", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "tag" : query,
        })
    })
    .then(data => data.text())
    .then(msg => {
        const pgs = []
        pgs.push({
            title: msg,
        })
        pgs.push({
            title: "제목2",
        })

        setPages(pgs)
    })

    return (
        <div>
            <h2>#{query} 으로 검색한 결과입니다.</h2>
            <Containter
                maxWidth="lg"
                >
            {
                (() => {
                    if(pages.length > 0){
                            return (pages.map((item, index) => {
                                return (<SearchBlock title={item.title}/>)
                            }))
                    }
                    else{
                        return (<h2>검색 결과가 없습니다.</h2>)
                    }
                }
                )()
            }
            </Containter>
            {/* <ul>

                <li>
                    
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
            <Route path={`${match.url}/:id`} component={Post}/> */}
        </div>
    )
}

export default Search