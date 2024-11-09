import { useContext, useEffect, useState } from 'react';
import { ID } from 'appwrite';

import DefaultLayout from '../layouts/DefaultLayout';
import CartItem from '../components/CartItem';
import LoadingPage from '../components/LoadingPage';
import { PaystackConsumer } from 'react-paystack';
import { databases } from '../appwriteconfig';

import CartContext from '../contexts/CartContext';

import { addCommas } from '../lib/utils';
import { getUserDetails, checkDiscountCode } from '../lib/functions';

import { LoaderCircle } from 'lucide-react';

interface CartItem {
  $id: number;
  imageUrls: string[];
  title: string;
  price: number;
}

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState<{ [key: number]: number }>({});
  const [cartTotal, setCartTotal] = useState(0);
  const [userDetails, setUserDetails] = useState<
    | {
        id: string;
        name: string;
        email: string;
      }
    | undefined
  >(undefined);
  const [discountCode, setDiscountCode] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState('');

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const { cart } = useContext(CartContext) || {
    addToCart: () => {},
  };

  const cartItems = cart?.map((item: CartItem) => ({
    id: item.$id,
    image: item.imageUrls[0],
    title: item.title,
    price: item.price,
  }));

  const checkCode = async (code: string) => {
    if (code === '') {
      setDiscount(0);
      setCouponError('');
      return;
    }
    setCouponLoading(true);
    const res = await checkDiscountCode(code.toLowerCase());
    if (res?.length === 0) {
      setDiscount(0);
      setCouponLoading(false);
      setCouponError('Invalid code');
      return;
    } else {
      const couponObject = res?.[0];
      setCouponLoading(false);
      setCouponError('');
      setDiscount(couponObject?.discount);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const initialQuantity: { [key: number]: number } = {};
    cartItems?.forEach((item) => {
      initialQuantity[item.id] = 1;
    });
    setQuantity(initialQuantity);
  }, [cart]);

  useEffect(() => {
    // Calculate total whenever quantities change
    const newTotal =
      cartItems?.reduce((acc, item) => {
        return acc + item.price * (quantity[item.id] || 1);
      }, 0) || 0;
    setCartTotal(newTotal);
  }, [cart, quantity]);

  const updateQuantity = (itemId: any, newQuantity: any) => {
    setQuantity((prev) => ({ ...prev, [itemId]: newQuantity }));
  };

  useEffect(() => {
    setDiscount(0);
  }, []);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const publicKey = 'pk_test_6a48efde02e1ff0911008c43a201f6a747e39a67';

  const config: {
    reference: string;
    email: string | undefined;
    amount: number;
    publicKey: string;
  } = {
    reference: new Date().getTime().toString(),
    email: userDetails?.email || '',
    // amount is in kobo, hence the multiplication by 100
    amount: discount > 0 ? cartTotal * (1 - discount) * 100 : cartTotal * 100,
    publicKey: publicKey,
  };

  const handleClose = () => {
    alert('Payment closed');
  };

  const addItemsToOrder = async (orderId: string) => {
    const orderItemsPromises =
      cart?.map((item) => {
        return databases.createDocument(
          import.meta.env.VITE_DATABASE_ID,
          import.meta.env.VITE_ORDERITEMS_COLLECTION_ID,
          ID.unique(),
          {
            orderId: orderId,
            productId: item.$id,
            quantity: quantity[item.$id],
            unitPrice: item.price,
          }
        );
      }) ?? [];

    await Promise.all(orderItemsPromises);
  };

  const createOrder = async () => {
    const order = await databases.createDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_ORDERS_COLLECTION_ID,
      ID.unique(),
      {
        userId: userDetails?.id as string,
        orderDate: new Date().toISOString(),
        total: discount > 0 ? cartTotal * (1 - discount) : cartTotal,
        discount: discount,
        status: 'pending',
      }
    );
    return order.$id;
  };

  const emptyCart = () => {
    localStorage.removeItem('cartItems');
  };

  const handleSuccess = async () => {
    if (cart?.length === 0) return;

    const orderId = await createOrder();
    await addItemsToOrder(orderId as string);
    emptyCart();
    window.location.href = '/orders';
  };

  const componentProps = {
    ...config,
    text: 'Checkout',
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto">
        <h3 className="mb-6 pl-4 text-3xl font-familjen-grotesk font-bold">
          Your Cart
        </h3>

        {loading ? (
          <div className="h-[70vh]">
            <LoadingPage />
          </div>
        ) : (
          <>
            {cartItems?.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[70vh]">
                <p className="text-3xl font-bold text-gray-500">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <div className="mb-14 p-4 lg:mb-32 flex flex-col lg:flex-row gap-5">
                <div className="px-4 rounded-2xl border border-[#F0F0F0] lg:grow lg:self-start">
                  {cartItems?.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        index !== 0 ? 'border-t border-[#F0F0F0]' : ''
                      }`}>
                      <CartItem
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={quantity[item.id] || 1}
                        updateQuantity={(newQuantity: any) =>
                          updateQuantity(item.id, newQuantity)
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="min-w-[323px] p-4 rounded-2xl border border-[#F0F0F0] flex flex-col gap-5">
                  <h4 className="text-xl font-bold">Order Summary</h4>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-bold">₦{addCommas(cartTotal)}</p>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <p className="text-gray-600">
                        Discount(-{discount * 100}%)
                      </p>
                      <p className="font-bold text-red-500">
                        -₦{addCommas(cartTotal * discount)}
                      </p>
                    </div>
                  )}
                  <div className="border-t border-[#F0F0F0] pt-4 pb-2 flex justify-between">
                    <p className="text-black">Total</p>
                    <p className="font-bold text-xl">
                      ₦{addCommas(cartTotal - cartTotal * discount)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <input
                        onChange={(e) => setDiscountCode(e.target.value)}
                        type="text"
                        placeholder="Add a promo code"
                        className="bg-[#F0F0F0] rounded-full w-full px-4 py-2 focus-within:outline-black"
                      />
                      <button
                        onClick={() => checkCode(discountCode)}
                        className="flex items-center justify-center w-[40%] max-w-[120px] bg-black hover:bg-transparent text-white hover:text-black rounded-full py-2 border-2 border-black duration-300">
                        {couponLoading ? (
                          <LoaderCircle className="animate-spin" />
                        ) : (
                          'Apply'
                        )}
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-sm text-red-500">{couponError}</p>
                    )}
                  </div>
                  <PaystackConsumer
                    {...componentProps}
                    email={userDetails?.email || ''}>
                    {({ initializePayment }) => (
                      <button
                        onClick={() =>
                          initializePayment(handleSuccess, handleClose)
                        }
                        className="bg-black hover:bg-transparent text-white hover:text-black rounded-full w-full py-4 border-2 border-black duration-300">
                        Checkout
                      </button>
                    )}
                  </PaystackConsumer>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Cart;
