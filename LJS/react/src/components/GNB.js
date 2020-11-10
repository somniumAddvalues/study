import React, { useState } from 'react'
//import { Link } from 'react-router-dom'

import { fade, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Drawer from '@material-ui/core/Drawer'
import InputBase from '@material-ui/core/InputBase'
import Link from '@material-ui/core/Link'

import SideMenu from './SideMenu'
//import { Link } from 'react-router-dom'

//import { AppBar, Toolbar, IconButton, MenuItem, Drawer} from '@material-ui/core'
//import { Menu } from '@material-ui/icons/Menu'

// material UI 에 추가할 스타일을 설정
const useStyles = makeStyles((theme) => ({
    Appbar: {
        display: "flex",
        color: theme.palette.primary.main,
        backgroundColor: "white",
        boxShadow: "none",
    },
    Toolbar: {
        display: "flex",
        position: 'relative',
        justifyContent: "space-between"
    },
    drawerPaper: {
        width: "15%",
    },
    search: {
        flexBasis: "40%",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: fade(theme.palette.common.white, 0.25),
        // },
        //marginRight: "auto",
        //width: '50%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(1),
        //     width: 'auto',
        // },
        border: "solid 3px",
        borderColor: theme.palette.primary.main,
        borderRadius: 15,
        //width: "50%"
        marginLeft: "15%",
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
    aboutLink: {
        textDecoration: 'none',
        "&:hover": {
            textDecoration: 'none'
        },
        marginLeft: "auto",
        marginRight: "3%",
    },
    menuIcon: {
        //marginLeft: "auto",
    },
    inputRoot: {
        display: "flex",
        color: 'inherit'
    },
    inputInput: {
        // 검색 창 4방향 패딩 -> Search가 중앙에 오도록
        padding: theme.spacing(1, 1, 1, 0),

        // 돋보기 아이콘과 입력 창(왼쪽에 패딩)을 떨어뜨림
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        color: "black",
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '30ch',
        //     }
        // },
    },
    homeBt: {
        //marginRight: 'auto',
        paddingLeft: 3,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0),
        },
    },
    imgSize: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    }
}))

// Link 컴포넌트를 쓰면 <a>태그를 쓰지 않고(새로고침 되지 않고) 
// 다른 라우트로 이동 가능하다.

// NavLink는 설정된 URL이 활성화 시에 스타일을 넣어줄 수 있다.
const GNB = () => {

    const classes = useStyles()

    const [toggle, setToggle] = useState(false)

    const toggleClicked = () => {
        setToggle(!toggle)
    }

    return (
        <AppBar position="fixed" className={classes.Appbar}>
            
            <Toolbar className={classes.Toolbar}>
                <IconButton 
                    disableRipple
                    edge="start"
                    color="inherit" 
                    className={classes.homeBt}
                    href="/"
                    >
                    <img className={classes.imgSize} src="/images/logo1.png"/ >
                </IconButton>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="가치를 더해줄 활동을 찾아보세요!"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ 'aria-label': 'search'}}
                    />
                </div>
                <Drawer classes={{paper: classes.drawerPaper}}  open={toggle} anchor="right" onClose={toggleClicked}>
                    <SideMenu/>
                </Drawer>

                <Link
                    variant="h5"
                    href="/about-us"
                    className={classes.aboutLink}
                    >
                        About us
                </Link>

                <IconButton 
                    className={classes.menuIcon} 
                    edge="end" 
                    color="inherit" 
                    aria-label="Menus" 
                    onClick={toggleClicked}
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>

                
                
            </Toolbar>
        </AppBar>
    )
}

export default GNB