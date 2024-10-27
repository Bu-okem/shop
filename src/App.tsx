import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

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
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
