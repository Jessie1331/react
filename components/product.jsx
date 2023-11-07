import "./product.css";
import QuantityPicker from "./quantityPicker";

import { useEffect, useState, useContext } from "react";
import DataContext from "./store/dataContext";


function Product(props){
    const[quantity, qty]= useState(1);
    const addToCart = useContext(DataContext).addToCart;

    useEffect(function(){
        console.log("hello i am a product");
    
    },[]);

   function onQuantityChange(qty){
    console.log("new quantity" + qty)

   }
   function getTotal(){
    const getTotal = props.data.Price * quantity;
 
   
    
    return getTotal.toFixed(2);

   }
   function handleAdd(){
    let prodCart = {...props.data};
    prodCart.quantity = quantity;
    addToCart(prodCart);
   }
    return(
         <div className="product">
            <img src={"./107 images/" + props.data.image} alt=""/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price:${props.data.Price.toFixed(2)}</label>
                <label>Total:${props.data.Price * quantity}</label>
            </div>
            <QuantityPicker onChange={onQuantityChange}/>

            <button onClick={handleAdd} className='btn btn-sm btn-success add-btn'>Add To Cart</button>
         </div>
    );
}

export default Product;