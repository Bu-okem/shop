import { useContext } from 'react';

import CartContext from '../contexts/CartContext';

import { addCommas } from '../lib/utils';

import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';

const CartItem = ({
  id,
  image,
  title,
  price,
  quantity,
  updateQuantity,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  updateQuantity: (quantity: number) => void;
}) => {
  const { removeItemFromCart } = useContext(CartContext) || {
    removeItemFromCart: () => {},
  };
  return (
    <div className="relative w-full py-4 flex gap-4">
      <img src={image} alt="" className="h-24 w-24 rounded-lg select-none" />
      <div className="flex flex-col justify-between">
        <h4 className="text-base font-bold">{title}</h4>
        <p className="text-xl font-bold">₦{addCommas(price * quantity)}</p>
      </div>
      <span className="absolute bottom-3 right-0 bg-[#F0F0F0] rounded-full w-[105px] px-2 py-1 flex justify-between">
        <button
          onClick={() => {
            if (quantity > 1) {
              updateQuantity(quantity - 1);
            }
          }}>
          <MinusIcon className="cursor-pointer" />
        </button>
        <p className="select-none">{quantity}</p>
        <button onClick={() => updateQuantity(quantity + 1)}>
          <PlusIcon className="cursor-pointer" />
        </button>
      </span>
      <Trash2Icon
        className="stroke-red-500 absolute right-0 cursor-pointer"
        onClick={() => removeItemFromCart(id)}
      />
    </div>
  );
};

export default CartItem;
