import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import { fade, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Drawer from '@material-ui/core/Drawer'
import InputBase from '@material-ui/core/InputBase'

import SideMenu from './SideMenu'

//import { AppBar, Toolbar, IconButton, MenuItem, Drawer} from '@material-ui/core'
//import { Menu } from '@material-ui/icons/Menu'

// material UI 에 추가할 스타일을 설정
const useStyles = makeStyles((theme) => ({
    Toolbar: {
        display: "flex",
        position: 'relative',
        flexDirection: "row-reverse",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 20,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvenets: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        // 검색 창 4방향 패딩 -> Search가 중앙에 오도록
        padding: theme.spacing(1, 1, 1, 0),

        // 돋보기 아이콘과 입력 창(왼쪽에 패딩)을 떨어뜨림
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '30ch',
            }
        },
    },
    homeBt: {
        marginRight: 'auto',
        paddingLeft: 5,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0),
        },
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
}))


// styled-components의 변수 명은 무조건 대문자로 시작
// const MenuIconWrapper = styled.div`
//     border: 1px solid black;
//     width: 100px;
//     align: right;
// `;

// const GNBWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const GNBContainer = styled.div`
//     display: flex;
//     flex-direction: row-reverse;
//     background-color: blue;
// `;

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
        <AppBar position="fixed">
            
            <Toolbar className={classes.Toolbar}>
                <IconButton edge="end" color="inherit" aria-label="Menus" onClick={toggleClicked}>
                    <MenuIcon />
                </IconButton>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ 'aria-label': 'search'}}
                    />
                </div>
                <Drawer open={toggle} anchor="right" onClick={toggleClicked}>
                    <SideMenu />
                </Drawer>
                <IconButton 
                disableRipple
                edge="start"
                color="inherit" 
                className={classes.homeBt}
                href="/"
                >
                    <img class={classes.small} src="/images/logo1.png"/ >
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default GNB