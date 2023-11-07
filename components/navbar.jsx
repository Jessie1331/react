import "./navbar.css";
import DataContext from "./store/dataContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';


function Navbar(){
const user =  useContext(DataContext).user;
const cart = useContext(DataContext).cart; 

function getCount(){
  let sum = 0 ;
  for (let i=0; i<cart.length; i++){
    const prod = cart[i];
    sum +=prod.quantity;
  return sum
}

 }
 


    return(
        <nav className="navbar navbar-expand-lg "  data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">DISS </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item"> 
              <a className="nav-link " href="/home2">Home</a>
             
              </li>
          
              <li className="nav-item"> 
              <a className="nav-link " href="/catalog">Catalog</a>
             
              </li>
             
              <li classNmae="nav-item">
                  <a className="nav-link" href="/about">About</a>
             </li>
              <li classNmae="nav-item">
                <a className="nav-link " href="/admi">Admin</a>
              </li>
            </ul>
          
              <div className="profile d-flex">
                <div>
                {user.name}</div>
<div className="cart">             
  <Link to='cart' className="btn btn-outline-primary btn-sm basket2" >
                {cart.length} Cart <i className="fa-regular fa-cart-shopping"></i></Link></div>

              </div>
              
          </div>
        </div>
      </nav>
    );
}

export default Navbar;