import "./admin.css";
import { useState } from "react";
import i from "../images/i.jpg";

function Admin() {
  const  [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    catagory: "",
    Price: 0,
    image: "",
  });
  const [allCoupons, setAllCoupons] =useState([]);
  const [coupon, setCoupon] = useState({
    code:'',
    discount: 0
  });



 


  function handleProductChange(e) {
let name = e.target.name;


    let copy = {...product };
    copy[name] = e.target.value;
    setProduct(copy);
  }

  function saveProduct() {
    console.log("product");
   let copy =[...allProducts];
   copy.push(product);
   setAllProducts(copy);
 
  }

  function handleCouponChange(e){
    let name = e.target.name;
    let copy = {...coupon };
    copy[name] = e.target.value;
    setCoupon(copy);
    
  }
  function saveCoupon(){
    console.log(coupon);
  let copy = [...allCoupons];
  copy.push(coupon);
  setAllCoupons(copy);
  
  }
return (
 <div className="admin">
    <h1>Store Manager</h1>

   <div className="parent">
   <section className='products'>
      <div className='form'>
        <h4>Add New Product</h4>

        <div className='control'>
            <label className='form-labe'>Title</label>
            <input type='text' className='form-control' name="title" onChange={handleProductChange} placeholder="Title" />
        </div>
        
        <div className='control'>
            <label className='form-labl'>Catagory</label>
            <input type='text'className='form-control' name='catagory' onChange={handleProductChange} placeholder="Catagory" />
        </div>
        
        <div className='control'>
            <label className='form-labe'>Price</label>
            <input type='number'className='form-control' name='price' onChange={handleProductChange}  placeholder="Price" />
        </div>

        <div className="control">
            <label className="contro">Image</label>
            <input type='text' className='form-control' name="image" onChange={handleProductChange}  placeholder="Image"/>
        </div>
        
        <button className="btn btn-dark" onClick={saveProduct}>Save </button>

       </div>
    
    {allProducts.map(prod => <p key={prod.title}>{prod.title} ${prod.price}</p>)};
     </section>   
     

<section className="copy">
 
  <div className='form'>
  <h4>Promo Code</h4>
  <div className="control">
     <label classNmae='form-label'>Promo code</label>
     <input type='text' onBlur={handleCouponChange} name="code" className='form-control' placeholder="Promo"/>
     </div>

     <div className="control">
      <label classNmae='form-label'>Discount</label>
      <input type='number' className='form-control' onBlur={handleCouponChange} name="discount" placeholder="Discount"/>
      </div>

      <button className="btn btn-dark" onClick={saveCoupon} >Apply Promo</button>
</div>
{allCoupons.map(coupon  => 
  <p key={coupon.code}>
    {coupon.code} - {coupon.discount}</p>
)};


<img src={i} alt='pdis' className="diss"/>
</section>



    
   </div>

 </div> 
   
   
   );
}
export default Admin;
