import axios from 'axios';




let catalog=[
    {
        id:1,
        price:12.32,
        stock:13,
        title:"Cabbage",
        image:"1.jpg",
        discount:5,
        category:"Vegetable"
    },
    {
        id:2,
        price:34.60,
        stock:53,
        title:"Orange",
        image:"2.jpg",
        discount:12,
        category:"Fruit"
    },
    {
        id:3,
        price:16.73,
        stock:43,
        title:"potato",
        image:"3.jpg",
        discount:8,
        category:"Vegetable"
    },
    {
        id:4,
        price:42.54,
        stock:14,
        title:"Cherry",
        image:"4.jpg",
        discount:6,
        category:"Fruit"
    },
    {
        id:5,
        price:73.53,
        stock:43,
        title:"Carrot",
        image:"5.jpg",
        discount:32,
        category:"Vegetable"
    },
    {
        id:6,
        price:15.43,
        stock:64,
        title:"Red Chili Pepper",
        image:"6.jpg",
        discount:6,
        category:"Vegetable"
    },
    {
        id:7,
        price:11.10,
        stock:63,
        title:"Kiwi",
        image:"7.jpg",
        discount:2,
        category:"Fruit"
    },
    {
        id:8,
        price:69.03,
        stock:46,
        title:"Bannana",
        image:"8.jpg",
        discount:8,
        category:"Fruit"
    },
    
];

class DataService{
    serverURL = "http://127.0.0.1:5000";

    async getCatalog(){


        let response = await axios.get(this.serverURL + "/api/products");
        return response.data;

        //use the line below to show a catalog without a backend
        //return catalog;
    }

    async saveProduct(prod){
        let response = await axios.post(this.serverURL + "/api/products",prod);
        console.log(response.data);
    }
}
export default DataService;