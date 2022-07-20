
import { useContext} from "react";
import StoreContext from "../context/storeContext";

import "./cart.css";
import ProductInCart from "./productInCart";

const Cart = () =>{
    const cart= useContext(StoreContext).cart;

    const getCount = () => {
        let count = 0;

        for(let i = 0; i < cart.length; i++){
            count += cart[i].quantity;
        }

        return count;
    };

    const getTotal=()=>{
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod=cart[i];
            total += prod.price*prod.quantity;
            
        }
        return total.toFixed(2);
    };

    return(
        <div className="cart-page">
            <h1>Ready to pay for these Amazing items? </h1>
            <h5>there are {getCount()} Products on your cart</h5>

            <div className="parent">
                <section className="list">
                    {cart.map((prop)=>(
                        <ProductInCart key={prop.id} data={prop}></ProductInCart>
                    ))}
                </section>
                <section className="info">
                    <h5>Total Pay</h5>
                    <h3>${getTotal()}</h3>
                </section>
            </div>
        
        </div>
    );
};


export default Cart;