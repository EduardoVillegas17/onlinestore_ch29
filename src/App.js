import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";

import {BrowserRouter,Routes,Route}from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <Navbar></Navbar>
        {/* <header className="App-header">
        
        </header> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/admin" element={<Admin />}/>
          </Routes>
        
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}
// this is a comment
export default App;
