import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './componentStyle';
import bannerImg from '../../img/banner.png';

const Products = ({products, onAddToCart}) => {
    const classStyle = useStyles();

return(
    <>
    <Grid>
        <img src={bannerImg} alt="Commerce.js" className={classStyle.banner}/>
    </Grid>    
    <main className={classStyle.content}>
    <>    
    <div className={classStyle.toolbar} />
    <Grid container justifyContent="center" spacing={4}>
        { 
            products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} ig={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
        ))}
    </Grid>
   </> 
</main>
</>
);
}

export default Products;