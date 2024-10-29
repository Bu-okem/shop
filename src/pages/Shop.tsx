import { useEffect, useState } from 'react';
import { Models } from 'appwrite';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductCard from '../components/ProductCard';
import LoadingPage from '../components/LoadingPage';

import { getProducts } from '../lib/functions';
import { slugify } from '../lib/utils';

const Shop = () => {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<
    Models.Document[] | undefined | null
  >(null);
  const fetchProducts = async () => {
    try {
      const product = await getProducts();
      console.log(product);
      setProducts(product);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
              <h3 className="font-bold text-3xl">Shop</h3>
            </div>
            <div className="max-w-[925px] grow grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
              {products?.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.imageUrls[0]}
                  name={product.title}
                  price={product.price}
                  link={`/${slugify(product.title)}-${product.$id}`}
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
