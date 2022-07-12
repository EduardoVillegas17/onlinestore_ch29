import { useState } from 'react';
import "./quantityPicker.css";

const QuantityPicker = (props)=>{
    let [quantity,setQuantity]=useState(1);

    const handleDecrease=()=>{
        if(quantity>1){
            let val=quantity-1;
            setQuantity(val);
            props.onChange(val);
        }
    }
    const handleIncrease=()=>{
        let newVal=quantity+1;
            setQuantity(newVal);
            props.onChange(newVal)
        };
    return(
        <div className="quantityPicker">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;