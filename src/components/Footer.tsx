import Logo from '../assets/icons/logo.svg';
import TwitterLogo from '../assets/icons/twitter-logo.svg';
import FacebookLogo from '../assets/icons/facebook-logo.svg';
import InstagramLogo from '../assets/icons/instagram-logo.svg';
import VisaLogo from '../assets/icons/visa-logo.svg';
import MastercardLogo from '../assets/icons/mastercard-logo.svg';
import PaypalLogo from '../assets/icons/paypal-logo.svg';
import ApplepayLogo from '../assets/icons/apple-pay-logo.svg';
import GooglepayLogo from '../assets/icons/google-pay-logo.svg';

const Footer = () => {
  const gridColumns = [
    {
      heading: 'company',
      items: ['about', 'features', 'works', 'career'],
    },
    {
      heading: 'help',
      items: [
        'customer support',
        'delivery details',
        'terms & conditions',
        'privacy policy',
      ],
    },
    {
      heading: 'faq',
      items: ['account', 'manage deliveries', 'orders', 'payment'],
    },
    {
      heading: 'resources',
      items: [
        'free ebooks',
        'development tutorials',
        'how-to blog',
        'youtube playlist',
      ],
    },
  ];

  const socials = [TwitterLogo, FacebookLogo, InstagramLogo];
  const paymentOptions = [
    VisaLogo,
    MastercardLogo,
    PaypalLogo,
    ApplepayLogo,
    GooglepayLogo,
  ];
  return (
    <footer className="bg-[#F0F0F0] p-4 pt-8">
      {/* <div className="">
        <h3 className=''>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
        <div className=""></div>
      </div> */}
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-around">
          <div className="max-w-64">
            <img src={Logo} alt="" className="w-28 mb-4" />
            <p className="text-sm text-gray-500 leading-5 mb-5">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="mb-6 flex gap-2">
              {socials.map((icon, index) => (
                <img key={index} src={icon} alt="" className="cursor-pointer" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-x-9">
            {gridColumns.map((column, index) => (
              <div className="" key={index}>
                <h4 className="uppercase font-bold tracking-[3px] mb-4">
                  {column.heading}
                </h4>
                <div className="flex flex-col gap-3">
                  {column.items.map((item, index) => (
                    <p
                      className="text-gray-500 capitalize cursor-pointer"
                      key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-t-[#0003] mt-10 pt-4 pb-16 flex flex-col lg:flex-row gap-4 justify-center lg:justify-between">
          <p className="text-gray-500 text-sm text-center">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex justify-center">
            {paymentOptions.map((option, index) => (
              <img src={option} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
