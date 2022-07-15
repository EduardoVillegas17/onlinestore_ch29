
import React from 'react';

//Context describe the data and function that will exist in the store
//this contains only the definitions, NO IMPLEMENTATION here

const StoreContext=React.createContext({
    cart: [],
    user: {},

    addProduct: () => {},
    removeProduct: () => {},
});


export default StoreContext;