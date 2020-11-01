import React, { useState } from 'react'
import MyAvatar from './MyAvatar'

import { makeStyles} from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginLeft: "auto",
    }
}))

function ListLink(props) {
    return <ListItem button component='a' {...props} />;
}



const SideMenu = () => {

    const classes = useStyles()

    const menus = [
        {text: '로그인', addr: '/login', icon: loginIcon}, 
        {text: '회원 가입', addr: '/join', icon: joinIcon}, 
        {text: '의견함', addr: '/opinion', icon: opinionIcon},
    ]

    function loginIcon() {
        return <ArrowForwardIosIcon className={classes.icon}/>
    }
    
    function joinIcon() {
        return <ArrowForwardIosIcon className={classes.icon}/>
    }
    
    function opinionIcon() {
        return <ArrowForwardIosIcon className={classes.icon}/>
    }

    return (
        <div>
            <MyAvatar/>
            <List>
                {menus.map((item) => (
                    <div>
                        <Divider/>
                    <ListLink className={classes.listItems} href={item.addr}>
                        <ListItemText primary={item.text}/>
                        <ListItemIcon >
                            {item.icon()}
                        </ListItemIcon>
                    </ListLink>
                    </div>
                ))}
                <Divider/>
            </List>
        </div>
    )
}

export default SideMenu