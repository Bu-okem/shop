import { Key, useContext, useEffect, useState } from 'react';
import { Models } from 'appwrite';

import { getProductById } from '../lib/functions';
import { addCommas } from '../lib/utils';

import DefaultLayout from '../layouts/DefaultLayout';
import LoadingPage from '../components/LoadingPage';

import CartContext from '../contexts/CartContext';
const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Models.Document | undefined | null>(
    null
  );
  const [imageNo, setImageNo] = useState(0);

  const url = new URL(window.location.href);
  const lastSlugPart = url.pathname.substring(
    url.pathname.lastIndexOf('/') + 1
  );
  const id = lastSlugPart.split('-')[lastSlugPart.split('-').length - 1];

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);
      setProduct(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { addToCart } = useContext(CartContext) || {
    addToCart: () => {},
  };

  const handleAddToCart = (product: any) => {
    //add product to cart
    addToCart(product);
  };

  return (
    <DefaultLayout>
      <div className="min-h-[70vh] max-w-7xl h-full w-full mx-auto">
        {loading ? (
          <div className="h-[70vh]">
            <LoadingPage />
          </div>
        ) : (
          <>
            <div className="lg:flex lg:gap-x-8">
              <div className="p-4 mb-5 lg:w-1/2 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4">
                <div className="bg-[#F0F0F0] rounded-xl h-[300px] max-w-[450px] flex justify-center grow">
                  <img
                    src={product?.imageUrls[imageNo]}
                    alt=""
                    className="object-contain lg:w-auto lg:max-h-[440px]"
                  />
                </div>
                <div className="h-[106px] lg:h-[440px] lg:w-[140px] flex lg:flex-col items-center gap-2">
                  {product?.imageUrls.map(
                    (
                      imgUrl: string | undefined,
                      index: Key | null | undefined
                    ) => (
                      <div
                        className={`h-[106px] lg:h-[150px] cursor-pointer rounded-2xl duration-100 ${
                          imageNo === index && 'border-2 border-black'
                        }`}>
                        <img
                          key={index}
                          src={imgUrl}
                          alt=""
                          className="h-full object-cover rounded-xl"
                          onClick={() => setImageNo(index as number)}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="grow max-w-[500px]">
                <div className="p-4">
                  <h3 className="text-2xl mb-4 font-bold font-familjen-grotesk">
                    {product?.title}
                  </h3>
                  <h4 className="text-2xl font-bold">
                    ₦{addCommas(product?.price)}
                  </h4>
                </div>
                <div className="mb-7 p-4 flex gap-4">
                  <button
                    className="bg-black text-white rounded-full w-full py-3 hover:bg-transparent hover:border-black hover:text-black border-2 border-black duration-300"
                    onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-2xl font-bold font-familjen-grotesk">
                Product Description
              </h3>
              <p className="text-black text-base">{product?.description}</p>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
