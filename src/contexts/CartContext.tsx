import { createContext, useEffect, useState } from 'react';
// import { account } from '../appwriteconfig';
// import { ID } from 'appwrite';
interface CartContextType {
  cart: any[];
  setCart: (cart: any[]) => void;
  addToCart: (product: any) => void;
  removeItemFromCart: (id: number) => void;
}
// @ts-ignore
const CartContext = createContext<CartContextType | null>();

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  // const getUserId = async () => {
  //   try {
  //     const user = await account.get();
  //     return user.$id;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const addToCart = (product: any) => {
    if (!cart.some((item) => item.$id === product.$id)) {
      setCart((prevState) => [...prevState, product]);
      const updatedItems = [...cart, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      alert('Item added to cart');
    } else {
      alert('Item is already in the cart');
    }
  };

  const removeItemFromCart = (id: number) => {
    // @ts-ignore
    const newCart = cart.filter((item) => item.$id !== id);

    setCart(newCart);

    localStorage.setItem('cartItems', JSON.stringify(newCart));
  };

  useEffect(() => {
    //get items in local storage
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('cartItems'));

    if (!items) {
      setCart([]);
    } else {
      //set item in state
      setCart(items);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeItemFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
