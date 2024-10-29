import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import CancelledOrders from './pages/CancelledOrders';
import SentOrders from './pages/SentOrders';

import ScrollToTop from './components/ScrollToTop';

import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />}>
            <Route index element={<SentOrders />} />
            <Route path="cancelled" element={<CancelledOrders />} />
          </Route>
        </Routes>
      </UserProvider>
      <ScrollToTop />
    </BrowserRouter>
  );
}
