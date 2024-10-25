import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/icons/logo.svg';
import HamburgerIcon from '../assets/icons/hamburger-icon.svg';

import { X } from 'lucide-react';
import CartIcon from '../assets/icons/cart-icon.svg';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/shop',
    },
  ];
  return (
    <nav className="">
      <div className="flex items-center justify-between">
        <div
          className={`h-screen w-52 p-4 fixed  top-0 bg-white duration-300 ${
            open ? 'left-0' : '-left-full'
          }`}>
          <X
            width={25}
            height={25}
            className="mb-8 cursor-pointer relative top-2"
            onClick={() => setOpen(!open)}
          />
          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => {
              return (
                <Link to={item.link} className="text-base" key={index}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="p-4 flex gap-4">
          <img
            src={HamburgerIcon}
            alt=""
            className="h-[16px] w-[16px] cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <img src={Logo} alt="" className="h-[16px] w-[100px]" />
        </div>
        <div className="p-4 flex items-center gap-4">
          <Link to={'/cart'} className="block">
            <img src={CartIcon} alt="" />
          </Link>
          <span className="">
            <button className="bg-black text-white py-2 px-4">Login</button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
