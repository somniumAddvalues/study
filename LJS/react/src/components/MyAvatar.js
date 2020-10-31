import React, { useState } from 'react'

import {fade, makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    imgBox: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 0,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0),
        },
    },
    myImg: {
        display: "flex",
        margin: "auto auto"
    },
}))

const MyAvatar = () => {

    const classes = useStyles()

    return (
        <IconButton className={classes.imgBox}>
            <img className={classes.myImg} src="/images/logo1.png" width="60%"/>
        </IconButton>
    )
}

export default MyAvatar