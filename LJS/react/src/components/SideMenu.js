import React, { useState } from 'react'
import MyAvatar from './MyAvatar'

import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "40%",
    }
}))

const SideMenu = () => {

    const classes = useStyles()

    return (
        <div>
            <MyAvatar/>
            <Button href="/login">로그인으로~</Button>
            <Button>Bt2</Button>
            <Button>Bt3</Button>
        </div>
    )
}

export default SideMenu