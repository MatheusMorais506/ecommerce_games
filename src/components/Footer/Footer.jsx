import React from 'react';
import {Grid} from '@material-ui/core';
import FooterImg from '../../img/logo.png';
import useStyles from './componentStyle';

const Fotter =  () => {
    const classStyle = useStyles();

    return(
        <Grid jus width="100%" heigth="4%" style={{backgroundColor: '#D3D3D3' }} 
        className={classStyle.media}>
            <img src={FooterImg} alt="Commerce.js" height="120px" width="120px"/>
        </Grid>
    )
}

export default Fotter;