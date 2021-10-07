import React  from 'react';
import Helmet from 'react-helmet'
import {Card, Typography, Button, Grid, CardMedia, ListItem } from '@material-ui/core';
import { useCart} from './CartContext';
import useStyles from './componentStyle';


function ShoppingCart() {
  const classStyle = useStyles();
  const cart = useCart()

  const itemsCoun = Object.keys(cart.cart).length  
  
  const obj2 = Object.values(cart.cart)
  const obj = obj2.map((item) => {
      let product = item.product
      let quantity = item.quantity
     
      return Object.defineProperty(product,'quantity',{
        value:quantity
      })
  })

  const frete = () => {
    let frete = 0
    let e = obj.reduce((InicialValue,currValue) => {
      return InicialValue + currValue.price
    },0)

    let valueFrete = 10
    if (e <= 250){
      for (var i=1; i <= itemsCoun; i++){
        frete += valueFrete 
      }
    }else{
      frete += 0   
    }
    return frete
  }

  const subTotal = obj.reduce((IncialValue,currValue) => {
    return IncialValue + currValue.price
  },0)

  const total = obj.reduce((IncialValue,currValue) => {
    return IncialValue + currValue.price
  },frete())

  const remove = id => () => {
    cart.removeCart(id)
  }

  const isEmpty = !itemsCoun

  const EmptyCart = () => {
    return <Typography variant="subtitle1" align="center" 
    style={{color:'#8A2BE2', fontFamily:'fantasy'}}>Seu carrinho está vazio</Typography>
  };
  const FilledCart = () => (
      <>
        <Grid xs={12} sm={6} md={4} ig={3}>
          {Object.keys(cart.cart).map((key) => {
            const {product} = cart.cart[key]
            return(
           <Card className={classStyle.Itens}>
            <ListItem key={product.data} className="">
                  <CardMedia className={classStyle.media}>
                    <img className={classStyle.img} src={product.urlImage} 
                    alt={product.name} />
                  </CardMedia>
                  <Typography variant="h7" className={classStyle.list}>
                    {product.name}
                  </Typography>
                  <Typography variant="h7" className={classStyle.list}>
                    {'R$' + product.price}
                  </Typography>
                  <button key={key} type="submit" className={classStyle.emptyButton}
                    onClick={remove(key)}>
                    <small>(Remover Item)</small>  
                  </button>
              </ListItem>
            </Card>
            )})}
            </Grid>
            <Card xs={12} sm={6} md={4} ig={3}> 
              <Card key="" className={classStyle.pagamento} style={{fontFamily:'fantasy'}}>
                <Typography variant="h6" className={classStyle.listButton}>
                  Subtotal:  {'R$' + subTotal}
                  {<br/>}
                </Typography>
                <Typography variant="h6" className={classStyle.listButton} >
                  Frete:  {'R$' + frete()}
                  {<br/>}
                </Typography>
                <Typography variant="h6" className={classStyle.listButton} 
                  style={{color:'#8A2BE2', fontFamily:'fantasy'}}>
                  Total:  {'R$' + total}
                  {<br/>}
                </Typography>
                  {<br/>}
                  <Button className={classStyle.confirmButton} size="large" type="button" 
                  variant="contained" color="secondary">Continuar</Button>
              </Card>
          </Card>
      </>
  )

    return(
          <Card>
            <Helmet title="Carrinho de Compras"/>
            <div className={classStyle.toolbar}/>
            { isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Card>
      )
}

export default ShoppingCart;
    