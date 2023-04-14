import LandingPage from "./pages/common/LandingPage";
import Loginpage from "./pages/user/Loginpage";
import Registerpage from "./pages/user/Registerpage";
import AdminProduct from "./pages/admin/AdminProduct";
import { Routes, Route } from "react-router-dom";
import LoginpageAdmin from "./pages/admin/LoginpageAdmin";
import Admin from "./pages/admin/Admin";
import HomePage from "./pages/user/HomePage";
import Protected from "./ProtectedRoute/Protected";
import ProductPage from "./pages/user/ProductPage";
import CartPage from "./pages/user/CartPage";
import AdminProtected from "./ProtectedRoute/AdminProtected";
import Payment from "./pages/user/Payment";
import Order from "./pages/user/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/login" element={<Loginpage />} />
        <Route path="/user/register" element={<Registerpage />} />
        <Route
          path="/user/homepage"
          element={
            <Protected>
              {" "}
              <HomePage />{" "}
            </Protected>
          }
        />
        <Route path="/user/product" element={<ProductPage />} />
        <Route path="/user/cart" element={<CartPage />} />

        <Route path="/admin/login" element={<LoginpageAdmin />} />
        <Route
          path="/admin/homepage"
          element={
            <AdminProtected>
              <Admin />
            </AdminProtected>
          }
        />

  <Route path="/user/payment" element={<Payment/>}/>
        <Route path="/user/order" element={<Order/>}/>
        <Route
          path="/admin/product"
          element={
            <AdminProtected>
              <AdminProduct />
            </AdminProtected>
          }
        />

       

        <Route
          path="*"
          element={
            <div>
              <h1> 404 | Page Not Found </h1>{" "}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
