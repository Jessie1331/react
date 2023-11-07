import "./cart.css";
import {useContext} from 'react';
import DataContext from '../store/dataContext';
import CartProduct from './cartProduct';





function Cart(){
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

        <div className='cart-page'>
            <h1 className='title'> Your Cart</h1>
            <h3>You have selected {cart.length}</h3>

            {cart.map((prod) => (
            <CartProduct data={prod} key={prod.id}/> 
)     )}       
        </div>
    );
}

export default Cart;