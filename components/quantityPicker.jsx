import "./quantityPicker.css";
import { useState } from "react";


function QuantityPicker(props){
    const[quantity, qty] = useState(1);

    function increase(){
        console.log("Increase Quantity");
        let val = quantity + 1;
        qty(val);
        props.onChange(val);

    };

    function decrease(){
        console.log("Decrease Quantity");
        if(quantity===1){return};
        let val = quantity - 1;
        qty(val);
        props.onChange(val);
    };

    return(
        <div className="quantityPicker">
            <button disabled={quantity===1} onClick={decrease} className="btn btn-secondary ">-</button>
            <label className='fs-1'>{quantity}</label>
            <button className="btn btn-secondary " onClick={increase} >+</button>
        </div>

    );
}export default QuantityPicker;