import ".//cartProduct.css";

function CartProduct(props){
  function getTotal() {
    const total = props.data.price * props.data.quantity;
 return total.toFixed(2);
}
    return(
        <div className='cart-product'>
        <img src={"/public/107 images/" +props.data.image} alt='placeHolder'/>
        <div className='info'>
        <h4>{props.data.title}</h4>
        <p>{props.data.catagory}</p>
</div>
      
        <label>${props.data.Price.toFixed(2)}</label>
        <label>{props.data.quantity}</label>
        <label>${getTotal()}</label>
      </div>  
    );
}
export default CartProduct;