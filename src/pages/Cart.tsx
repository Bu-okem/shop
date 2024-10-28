import DefaultLayout from '../layouts/DefaultLayout';
import CartItem from '../components/CartItem';

import ProductImage from '../assets/images/jean-trousers.png';
import ProductImage2 from '../assets/images/jean-shorts.png';

const Cart = () => {
  const cartItems = [
    {
      image: ProductImage,
      name: 'Product Name',
      price: '12,000',
    },
    {
      image: ProductImage2,
      name: 'Product Name 2',
      price: '8,000',
    },
    {
      image: ProductImage2,
      name: 'Product Name 3',
      price: '8,000',
    },
  ];
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto">
        <h3 className="mb-6 pl-4 text-3xl font-familjen-grotesk font-bold">
          Your Cart
        </h3>
        <div className="mb-14 p-4 lg:mb-32 flex flex-col lg:flex-row gap-5">
          <div className="px-4 rounded-2xl border border-[#F0F0F0] lg:grow lg:self-start">
            {cartItems.map((item, index) => (
              <div
                className={`${index !== 0 ? 'border-t border-[#F0F0F0]' : ''}`}>
                <CartItem
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          <div className="p-4 rounded-2xl border border-[#F0F0F0] flex flex-col gap-5">
            <h4 className="text-xl font-bold">Order Summary</h4>
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-bold">₦12,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount(-20%)</p>
              <p className="font-bold text-red-500">-₦1,200</p>
            </div>
            <div className="border-t border-[#F0F0F0] pt-4 pb-2 flex justify-between">
              <p className="text-black">Total</p>
              <p className="font-bold text-xl">₦12,000</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a promo code"
                className="bg-[#F0F0F0] rounded-full w-full px-4 py-2 focus-within:outline-black"
              />
              <button className="w-[40%] max-w-[120px] bg-black hover:bg-transparent text-white hover:text-black rounded-full py-2 border-2 border-black duration-300">
                Apply
              </button>
            </div>
            <button className="bg-black hover:bg-transparent text-white hover:text-black rounded-full w-full py-4 border-2 border-black duration-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Cart;
