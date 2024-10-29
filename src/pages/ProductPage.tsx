import { useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';

import ProductImage from '../assets/images/jean-trousers.png';
import ProductImage2 from '../assets/images/jean-shorts.png';

import { PlusIcon, MinusIcon } from 'lucide-react';
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <DefaultLayout>
      <div className="lg:flex lg:gap-x-8  max-w-7xl w-full mx-auto">
        <div className="p-4 mb-5 lg:w-1/2 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4">
          <div className="bg-[#e0e0e0] rounded-xl h-full max-w-[450px] flex justify-center grow">
            <img
              src={ProductImage}
              alt=""
              className="lg:w-auto lg:max-h-[440px]"
            />
          </div>
          <div className="h-[106px] lg:h-[440px] lg:w-[140px] flex lg:flex-col items-center gap-2">
            <img
              src={ProductImage}
              alt=""
              className="h-full lg:h-[167px] rounded-xl"
            />
            <img
              src={ProductImage2}
              alt=""
              className="h-full lg:h-[167px] rounded-xl"
            />
            <img
              src={ProductImage}
              alt=""
              className="h-full lg:h-[167px] rounded-xl"
            />
          </div>
        </div>
        <div className="grow max-w-[500px]">
          <div className="p-4">
            <h3 className="text-2xl mb-4 font-bold font-familjen-grotesk">
              Product Name
            </h3>
            <h4 className="text-2xl font-bold">₦12,000</h4>
          </div>
          <div className="mb-7 p-4 flex gap-4">
            <span className="rounded-full bg-[#F0F0F0] w-28 lg:w-40 max-w-40 flex gap-4 items-center justify-between py-2 px-4">
              <MinusIcon
                className="cursor-pointer"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              />
              {/* <input type="number" name="" id="" className="bg-[#F0F0F0] w-5" /> */}
              <p className="text-black select-none">{quantity}</p>
              <PlusIcon
                className="cursor-pointer"
                onClick={() => setQuantity(quantity + 1)}
              />
            </span>
            <button className="bg-black text-white rounded-full w-full py-3 select-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold font-familjen-grotesk">
          Product Details
        </h3>
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          consequuntur, quas quod dolores repellat quia quisquam natus accusamus
          cumque tempora.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
