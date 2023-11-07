import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";
import Catalog from "./components/pages/catalog";
import Product from "./components/product";
import 'bootstrap/dist/css/bootstrap.css';
import Home2 from "./components/pages/home2";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import CartProduct from './components/pages/cartProduct';
import Admin from "./components/pages/admi";
import Cart from "./components/pages/cart";
import DataContext from "./components/store/dataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {useState, useEffect} from 'react';
import GlobalProvider from "./components/store/globalProvider";


function App(){
  return (
    
 <GlobalProvider>
    <BrowserRouter>
    <div className="app">
      <Navbar />
    


<Routes>
<Route path="/" element={<Home2/>}></Route>
<Route path="/home2" element={<Home2/>}></Route>
  <Route path="/catalog" element={<Catalog/>}></Route>
  <Route path="/about" element={<About/>}></Route>


  <Route path="/admi" element={<Admin/>}></Route>
  <Route path="/cart"  element={<Cart/>}></Route>
</Routes>
       

      <Footer/>

    </div>
   </BrowserRouter> 

 </GlobalProvider>
  );
}
export default App;
