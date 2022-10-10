import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';
import { HiOutlineMenu } from 'react-icons/hi';

// Navigation Links
const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {/* Map to every link objects from constants.js file */}
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to} //leads to a display when clicked
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='mr-2 w-5 h-5' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

// Mobile Sidebar
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#241d16]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain ' />
        <NavLinks />
      </div>

      <div className='absolute md:hidden block top-6 right-3'>
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className='w-6 h-6 text-white mr-2'
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className='w-6 h-6 text-white mr-2'
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[rgb(126,71,39)] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
