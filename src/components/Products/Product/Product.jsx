import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import Star from '@material-ui/icons/Star';
import useStyles from './componentStyle';
import { useCart } from '../../Cart/CartContext';

const Product = ({product}) => {
    const classStyle = useStyles();
    const cart = useCart()
    const add = product => () => {
        cart.addToCart(product)
    }

    return (
       <Card className={classStyle.root}>
           <CardMedia className={classStyle.media} title={product.name}>
                    <img src={product.urlImage} alt={product.name} className={classStyle.imageMedia} />
            </CardMedia>
           <CardContent>
                <div className={classStyle.cardContent}>
                    <Typography variant="body1" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body1">
                        <Star/>
                        {product.score}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.price}</Typography>
           </CardContent>
           <CardActions disableSpacing className={classStyle.cardActions}> 
                    <IconButton aria-label="Add to Cart" onClick={add(product)}>
                    <AddShoppingCart/>
                </IconButton>
           </CardActions>
        </Card>
    )
}

export default Product;