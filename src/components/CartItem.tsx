import { useState } from 'react';

import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react';

const CartItem = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="relative w-full py-4 flex gap-4">
      <img src={image} alt="" className="h-24 w-24 rounded-lg select-none" />
      <div className="flex flex-col justify-between">
        <h4 className="text-base font-bold">{name}</h4>
        <p className="text-xl font-bold">₦{price}</p>
      </div>
      <span className="absolute bottom-3 right-0 bg-[#F0F0F0] rounded-full w-[105px] px-2 py-1 flex justify-between">
        <MinusIcon
          className="cursor-pointer"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        />
        <p className="select-none">{quantity}</p>
        <PlusIcon
          className="cursor-pointer"
          onClick={() => setQuantity(quantity + 1)}
        />
      </span>
      <Trash2Icon className="stroke-red-500 absolute right-0 cursor-pointer" />
    </div>
  );
};

export default CartItem;
