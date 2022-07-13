import { useState } from "react";
import "./admin.css";

const Admin = () => {
    const [coupon,setCoupon]=useState({});
    const [product,setProduct]=useState({});
    

    const handleCouponChenge =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        
        let copy={...coupon};//create a copy
        copy[name] = value;//modify copy
        coupon[name] = value;
        setCoupon(copy);
    };
    const saveCoupon = ()=>{
        let copy={ ...coupon};
        let discount =parseFloat(copy.discount);
        copy.discount=discount;

        console.log(copy);
    };

    const handleProductChenge = (e)=>{
        let name=e.target.name;
        let value=e.target.value;

        let copy = {...product };
        copy[name] = value;
        setProduct(copy);
    };
    const saveProduct=() => {
        let copy={...product};
        copy.price=parseFloat(copy.price);
        console.log(copy);
    };
    
    return ( 
        <div className="admin-page">
            <h1>Store administration</h1>

            <div className="parent">
                <section className="products">
                    <h3>Products</h3>

                    <div className="form">
                        <div className="my-control">
                            <label>Title</label>
                            <input name="title" onClick={handleProductChenge} type="text" />
                        </div>

                        <div className="my-control">
                            <label>Discount</label>
                            <input name="price" onClick={handleProductChenge} type="number" />
                        </div>

                        <div className="my-control">
                            <label>Title</label>
                            <input name="category" onClick={handleProductChenge} type="text" />
                        </div>

                        <div className="my-control">
                            <label> Image</label>
                            <input name="image" placeholder="Image name like: prod1.jpg" onChange={handleProductChenge} type="text" />
                        </div>

                        <div className="my-control">
                            <button onClick={saveProduct} className="btn-sm btn-primary">Save Product</button>
                        </div>
                    </div>
                </section>




                <section className="coupons">
                    <h3>Coupons Codes</h3>

                    <div className="form">
                        <div className="my-control">
                            <label>Code</label>
                            <input name="code" onClick={handleCouponChenge} type="text" />
                        </div>

                        <div className="my-control">
                            <label>Discount</label>
                            <input name="discuount" onClick={handleCouponChenge} type="number" />
                        </div>

                        <div className="my-control">
                            <button onClick={saveCoupon} className="btn-sm btn-primary">Save Coupon</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Admin;



/* 
git add .
git commit -m "adadadadad"
git push
 */