import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contacto from "./Components/Contacto";
import Juego from "./Components/Juego";
import ProductsDetail from "./Components/ProductsDetail";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail" element={<ProductsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/juego" element={<Juego />} />

      </Routes>
    </div>
  );
}

export default App;
