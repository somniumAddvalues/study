import React from 'react'

import Box from '@material-ui/core/Box'


const SearchBlock = (props) => {
    
    //alert(props.title)

    return (
        <Box>
            <p>{props.title}</p>
        </Box>
    )
}

export default SearchBlock