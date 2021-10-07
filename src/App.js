import React ,{useState, useEffect} from 'react';
import './App.css';
import {Products, Navbar, ShoppingCart, Footer} from './components';
import { CartProvider} from './components/Cart/CartContext';
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Imag312 from './img/super-mario-odyssey.png';
import Imag201 from './img/call-of-duty-infinite-warfare.png';
import Imag102 from './img/the-witcher-iii-wild-hunt.png';
import Imag99 from './img/call-of-duty-wwii.png';
import Imag12 from './img/mortal-kombat-xl.png';
import Imag74 from './img/shards-of-darkness.png';
import Imag31 from './img/terra-media-sombras-de-mordor.png';
import Imag420 from './img/fifa-18.png';
import Imag501 from './img/horizon-zero-dawn.png';


const imagens = [
    {
        id:312,
        image:Imag312
    },
    {
        id:201,
        image:Imag201
    },
    {
        id:102,
        image:Imag102
    },
    {
        id:99,
        image:Imag99
    },
    {
        id:12,
        image:Imag12
    },
    {
        id:74,
        image:Imag74
    },
    {
        id:31,
        image:Imag31
    },
    {
        id:420,
        image:Imag420
    },
    {
        id:501,
        image:Imag501
    },
]

function App() {
    const [data,setData]=useState([]);

    const getData=()=>{
        fetch('products.json', {
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(function(resp){
            return resp.json();
        })
        .then(function(myJson){
            setData(myJson)
        });
    }
    useEffect(() => {
        getData()
    },[])

    let urlImage = {urlImage:''};
       const products = data.map((exam) => ({
        ...exam,
        urlImage:(imagens.find(({id}) => exam.id === id) ?? urlImage).image
    }))

    return(
       <Router> 
        <CartProvider>
            <Helmet title="Ecommerce Games"/>
             <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Products products={products}/>
                </Route>
                <Route exact path="/cart">
                    <ShoppingCart/>
                </Route>
            </Switch>
            <Footer/>
        </CartProvider>
    </Router>
      )
}

export default App;
    