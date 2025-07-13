import { useState } from 'react';
import burgerMenu from '../assets/images/icon-menu.svg';
import closeBtn from '../assets/images/icon-menu-close.svg';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menú de escritorio */}
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
      </ul>

      {/* Botón hamburguesa (solo en mobile) */}
      <img
        className="w-10 h-4 cursor-pointer sm:hidden z-20 relative"
        src={isOpen ? closeBtn : burgerMenu}
        alt="Botón de menú"
        onClick={toggleMenu}
      />

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg p-6 z-10">
          <ul className="flex flex-col space-y-6 text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </div>
      )}
    </>
  );
};
