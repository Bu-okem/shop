import DefaultLayout from '../layouts/DefaultLayout';

import ProductCard from '../components/ProductCard';

import HeroImageMobile from '../assets/images/hero-image-mobile.png';
import HeroImage from '../assets/images/hero-image.png';
import ProductImage from '../assets/images/jean-trousers.png';

const Home = () => {
  return (
    <DefaultLayout>
      {/* HERO */}
      <section className="bg-[#F0F0F0] lg:flex">
        <div className="pt-10 p-4 lg:pl-24">
          <h1 className="uppercase font-familjen-grotesk font-bold text-4xl lg:text-6xl leading-9 lg:leading-[64px] mb-5">
            Find clothes that matches your style
          </h1>
          <p className="text-gray-500 text-sm lg:text-base leading-5 mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black lg:hover:bg-transparent text-white lg:hover:text-black rounded-full w-full lg:w-52 py-4 border-2 border-black duration-300">
            Shop Now
          </button>
        </div>
        <div className="lg:w-[80%] lg:pr-12">
          <img src={HeroImageMobile} alt="" className="w-full lg:hidden" />
          <img src={HeroImage} alt="" className="w-full hidden lg:block" />
        </div>
      </section>
      {/* #499428 */}
      <section className="max-w-7xl w-full mx-auto">
        <h2 className="text-2xl lg:text-4xl font-familjen-grotesk font-bold text-center text-black uppercase mt-10 mb-5 ">
          Products
        </h2>
        <div className="p-4 grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-items-center">
          <ProductCard
            image={ProductImage}
            name="Product Name"
            price="3000"
            link="/product"
          />
          <ProductCard
            image={ProductImage}
            name="Product Name That is Long"
            price="3000"
            link="/product"
          />
          <ProductCard
            image={ProductImage}
            name="Product Name"
            price="3000"
            link="/product"
          />
          <ProductCard
            image={ProductImage}
            name="Product Name"
            price="3000"
            link="/product"
          />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
