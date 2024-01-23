import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Account from "./Pages/Account/Account";
import Invoice from "./Pages/Invoice/Invoice";
import Admin from "./Pages/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Wishlist from "./Pages/wishlist/Wishlist";
import SellerSupport from "./Pages/sellerSupport/SellerSupport";
import AdminProfile from "./Pages/Admin/AdminProfilePage/AdminProfile";
import KYCForm from "./Pages/sellerKyc/SellerKyc";
import SellerSignUp from "./Pages/sellerKyc/SellerSignup";
import AddProduct from "./Pages/addProduct/AddProduct";
import NotFound from "./components/404/NotFound";
import OrderCompleted from "./Pages/OrderComplete/OrderCompleted";
import ProductListDisplay from "./Pages/ProductListDisplay/ProductListDisplay";
import Orders from "./Pages/Order/Order";
import SellerAccount from "./Pages/sellerAccount/SellerAcount";
import AddProd from "./Pages/addProduct/Addprod";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  const location = window.location.pathname;

  return (
    <Router>
      {location === "/admin" ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />

        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/ProductListDisplay" element={<ProductListDisplay />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/sellerSupport" element={<SellerSupport />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/sellersignup" element={<SellerSignUp />} />
        <Route path="/kycform" element={<KYCForm />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/orderCompleted" element={<OrderCompleted />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/SellerAccount" element={<SellerAccount />} />
        <Route path="/AddProd" element={<AddProd />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route />
      </Routes>
      {location === "/admin" ? null : <Footer />}
    </Router>
  );
}

export default App;
