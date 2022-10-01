
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom"
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element = {<Home />} />
        <Route index path="/product" element = {<Products />} />
        <Route path="/product/:id" element = {<ProductDetails />} />
        <Route index path="/about" element = {<About />} />
        <Route path= "/contact" element = {<Contact />} />
        <Route path = "/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
