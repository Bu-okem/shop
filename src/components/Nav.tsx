import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { UserContext, UserContextType } from '../contexts/UserContext';

import Logo from '../assets/icons/logo.svg';
import HamburgerIcon from '../assets/icons/hamburger-icon.svg';
import AccountIcon from '../assets/icons/account-icon.svg';

import { X } from 'lucide-react';
import CartIcon from '../assets/icons/cart-icon.svg';

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const { session } = useContext<UserContextType | null>(UserContext)!;

  useEffect(() => {
    //get user session
    setUserSession(session.$id);
  }, [session]);

  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/shop',
    },
    {
      name: 'Orders',
      link: '/orders',
    },
  ];
  const desktopNavItems = [
    {
      name: 'Shop',
      link: '/shop',
    },
  ];
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className={`h-screen w-52 p-4 fixed top-0 bg-white duration-300 lg:hidden z-50 ${
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
        <div className="p-4 flex gap-4 items-center">
          <img
            src={HamburgerIcon}
            alt=""
            className="h-[16px] w-[16px] cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          />
          <Link to={'/'}>
            <img src={Logo} alt="" className="h-[16px] w-[100px]" />
          </Link>
          <div className="hidden lg:flex gap-4">
            {desktopNavItems.map((item, index) => {
              return (
                <Link to={item.link} className="text-base" key={index}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="p-4 flex items-center gap-4">
          <Link to={'/cart'} className="block relative">
            <span className="text-xs absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
            <img src={CartIcon} alt="" />
          </Link>
          <span className="">
            {userSession ? (
              <Link to={'/profile'}>
                <img src={AccountIcon} alt="" />
              </Link>
            ) : (
              <button
                className="bg-black lg:hover:bg-white text-white lg:hover:text-black border-2 border-black  py-[0.38rem] px-[0.9rem] rounded-full duration-300"
                onClick={() => navigate('/login')}>
                Login
              </button>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
