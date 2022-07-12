import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

 
const Product = (props)=>{
    let [quantity,setQuantity]=useState(1);


    const QuantityChange=(val)=>{
        setQuantity(val);
    };

    const getTotal=()=>{
        let total=props.data.price*quantity;
        return total.toFixed(2);
    }
    return(
        <div className="product">
            <img src={"/img/"+props.data.image} alt=""/>
            <h2>{props.data.title}</h2>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Total: ${getTotal()}</label>
            <QuantityPicker onChange={QuantityChange}></QuantityPicker>
            <button className="btn btn-primary btn-sm">Add</button>
            
        </div>
    );
};

export default Product;

