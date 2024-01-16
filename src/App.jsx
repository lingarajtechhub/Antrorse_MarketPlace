import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductPage2 from "./Pages/ProductPage/ProductPage2";
import Account from "./Pages/Account/Account";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/productPage2" element={<ProductPage2 />} />
        <Route path="/account" element={<Account />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
