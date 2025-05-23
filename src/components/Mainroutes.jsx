
import { Routes, Route } from "react-router-dom";
import About from "./About"
import Product from "./Product"
import Home from "./Home";
import Productdet from "./Productdet";

const Mainroutes = () => {
    return (
     <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Product />} >
      <Route path="/Product/details/:name" element={<Productdet />} />
      </Route >
      
    </Routes>
  </div>
    );
};

export default Mainroutes;