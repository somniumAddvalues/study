import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'

//import { AppBar, Toolbar, IconButton, MenuItem, Drawer} from '@material-ui/core'
//import { Menu } from '@material-ui/icons/Menu'

// material UI 에 추가할 스타일을 설정
const useStyles = makeStyles({
    Toolbar: {
        display: "flex",
        flexDirection: "row-reverse",
    },
    Drawer: {
        anchor: "right"
    }
})

// styled-components의 변수 명은 무조건 대문자로 시작
const MenuIconWrapper = styled.div`
    border: 1px solid black;
    width: 100px;
    align: right;
`;

const GNBWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const GNBContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: blue;
`;

// Link 컴포넌트를 쓰면 <a>태그를 쓰지 않고(새로고침 되지 않고) 
// 다른 라우트로 이동 가능하다.

// NavLink는 설정된 URL이 활성화 시에 스타일을 넣어줄 수 있다.
const GNB = () => {

    const classes = useStyles()

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }

    const [toggle, setToggle] = useState(false)

    const toggleClicked = () => {
        setToggle(!toggle)
    }

    return (

        <AppBar position="static">
            <Toolbar className={classes.Toolbar}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleClicked} >
                    <MenuIcon />
                </IconButton>
                <Drawer open={toggle} anchor="right">
                    <MenuItem onClick={toggleClicked}>Home</MenuItem>
                </Drawer>
            </Toolbar>
        </AppBar>

        // <GNBWrapper>
        //     <GNBContainer>
        //         <MenuIconWrapper>
        //             <IconButton onClick={toggleClicked}>
        //                 <MenuIcon/>
        //             </IconButton>
        //             <Drawer anchor='right' open={toggle}>
        //                 <MenuItem onClick={toggleClicked}>Home</MenuItem>
        //             </Drawer>
        //         </MenuIconWrapper>
        //     </GNBContainer>
        // </GNBWrapper>
    )
}

export default GNB