import {Link} from "react-router-dom";
import "./home.css";


const Home = ()=> {

    return (
        <div className="home-page">
            <h1>Fresh food!!</h1>
            <Link className="btn btn-primary" to="/catalog">Check out catalog
            </Link>
        </div>
    );
};



export default Home;