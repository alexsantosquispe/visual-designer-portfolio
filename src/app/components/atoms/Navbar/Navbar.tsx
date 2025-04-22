import { labels } from '@/app/constants';
import { useState, useEffect } from 'react';

import { MenuButton } from '../MenuButton/MenuButton';
import { MenuList } from '../MenuList/MenuList';
import { LogoNavBar } from '../LogoNavBar/LogoNavBar';
import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

const linksMap = [
  { href: '#about', label: labels.navBar.about },
  { href: '#projects', label: labels.navBar.work },
  { href: '#contact', label: labels.navBar.contact }
];

export const Navbar = () => {
  const [isMenuNavBarOpen, setIsMenuNavBarOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleNavbar = () => {
    setIsMenuNavBarOpen((prev) => !prev);
  };

  return (
    <header
      className={twMerge(
        'bg-background/75 fixed flex w-full justify-center border-b border-b-gray-100 backdrop-blur-sm transition-transform duration-300 ease-in-out md:h-[4.875rem]',
        cn({ 'translate-y-0': showNavBar, '-translate-y-full': !showNavBar })
      )}
    >
      <nav className='flex w-full flex-col md:w-[80rem] md:flex-row md:items-center md:justify-between md:px-[2.625rem] md:py-6'>
        <div className='flex items-center justify-between p-4 md:p-0'>
          <LogoNavBar />
          <MenuButton
            isNavbarOpen={isMenuNavBarOpen}
            toggleNavbar={toggleNavbar}
          />
        </div>
        <MenuList
          isNavbarOpen={isMenuNavBarOpen}
          options={linksMap}
          onSelectOption={toggleNavbar}
        />
      </nav>
    </header>
  );
};
