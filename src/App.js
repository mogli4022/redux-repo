import React, { useEffect } from 'react';
import Cart from './components/cart';
import Product from './components/product';
import Total from './components/total';
import Home from './components/home';

import {Route, Routes, Link} from 'react-router-dom'
import Error from './components/error ';
import Navbar from './components/navbar';
import {useSelector, useDispatch} from 'react-redux'
import { incrementAction, decrementAction } from './store/action/countAction';
import { productAction } from './store/action/productAction';
import axios from 'axios';

function App() {
const state = useSelector(state => state.count);
const products = useSelector(state => state.allProducts);
const dispatch = useDispatch()

const getAllProducts = async () => {
  const products = await axios.get("https://fakestoreapi.com/products").catch(e => {
    console.log("error", e);
  })
  dispatch(productAction(products.data))
}

useEffect(() => {
  getAllProducts()
},[])

const button = {
  margin : "10px",
  padding : "10px"
}
  return (
    <>
      <div className='App'>
        <h1>Count : {state}</h1>
        <button style={button} onClick = {() => dispatch(incrementAction(15))}>+</button>
        <button style={button} onClick = {() => dispatch(decrementAction(5))}>-</button>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/total' element={<Total/>} />
        <Route path='*' element={<Error/>}/>
      </Routes> */}
      </div>
    </>
  );
}

export default App;
