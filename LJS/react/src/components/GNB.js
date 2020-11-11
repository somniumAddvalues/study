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
        display: "flex",
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
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "1%",
        marginRight: "1%",
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0),
        },
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
        color: 'inherit',
        width: "100%"
    },
    inputInput: {
        // 검색 창 4방향 패딩 -> Search가 중앙에 오도록
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
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

    // e.preventDefault 는 form 태그의 href 기능을 중지시킴
    const searchHandler = (e) => {
        e.preventDefault()
        const text = e.target.searchText.value

        document.location.href = "/search?query=" + text
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

                <form className={classes.search} onSubmit= {searchHandler}>
                    
                    <InputBase
                        placeholder="가치를 더해줄 활동을 찾아보세요!"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ 'aria-label': 'search'}}
                        name="searchText"
                    />
                    <IconButton 
                        className={classes.searchIcon}
                        disableRipple
                        type="submit"
                        >
                        <SearchIcon />
                    </IconButton>
                </form>

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