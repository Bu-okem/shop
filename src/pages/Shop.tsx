import { useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductCard from '../components/ProductCard';
import LoadingPage from '../components/LoadingPage';

import ProductImage from '../assets/images/jean-trousers.png';
import ProductImage2 from '../assets/images/jean-shorts.png';

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const products = [
    {
      image: ProductImage,
      name: 'Jean Trousers',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage,
      name: 'Jean Trousers',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage,
      name: 'Jean Trousers',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage,
      name: 'Jean Trousers',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },

    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },
    {
      image: ProductImage2,
      name: 'Jean Shorts',
      price: '23,000',
      link: '/product',
    },
  ];
  return (
    <DefaultLayout>
      <div className="max-w-7xl w-full mx-auto mb-20">
        {loading ? (
          <div className="h-[70vh]">
            <LoadingPage />
          </div>
        ) : (
          <div className="p-4 lg:flex">
            <div className="hidden w-1/5 lg:block">
              <h3 className="font-bold text-3xl">Casual</h3>
            </div>
            <div className="max-w-[925px] grow grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  link={product.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Shop;
