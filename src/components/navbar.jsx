import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
//import Cart from "./cart";

function Navbar() {
  const cart = useContext(StoreContext).cart;

  const getCount = () => {
    let count = 0;
    console.log(cart);

    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }

    return count;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Organika
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/cart">
                <span>{getCount()}</span>
                View Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
