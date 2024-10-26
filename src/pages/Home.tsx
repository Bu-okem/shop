import DefaultLayout from '../layouts/DefaultLayout';

import HeroImageMobile from '../assets/images/hero-image-mobile.png';
import HeroImage from '../assets/images/hero-image.png';

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
      {/*  */}
    </DefaultLayout>
  );
};

export default Home;
