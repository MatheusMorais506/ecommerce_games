import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import LogoImg from '../../img/logo.png'
import CartImg from '../../img/cart-icon.svg'
import useStyles from './componentStyle';
import { useCart } from '../Cart/CartContext';
import {Link} from 'react-router-dom'; 

const Navbar = () => {
    const classStyle = useStyles();

    const cart = useCart()
    
    const itemsCount = Object.keys(cart.cart).length

    return (
        <>
         <AppBar position="fixed" className={classStyle.appBar}> 
           <Toolbar>
               <Typography variant="h6" className={classStyle.title} color="inherit" component={Link} to="/" style={{ color: '#4B0082'}}>
                    <img src={LogoImg} alt="Commerce.js" height="120px" width="120px" className={classStyle.image}/>
               </Typography>
               <div className={classStyle.grow}/>
               <div className={classStyle.menuButtom}>
                   <IconButton arial-label="Show car items" color="inherit" component={Link} to="/cart">
                       <Badge badgeContent={itemsCount >0 && <span>{itemsCount}</span>} color="secondary">
                            <img src={CartImg} alt="" height="33px"/>
                       </Badge>
                   </IconButton>
               </div>
           </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;
