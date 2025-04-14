import { labels } from '@/app/constants';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

const linksMap = [
  { href: '#about', label: labels.navBar.about },
  { href: '#projects', label: labels.navBar.work },
  { href: '#contact', label: labels.navBar.contact }
];

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <header className='fixed flex w-full justify-center bg-white opacity-90 md:h-[4.875rem]'>
      <nav className='flex w-full flex-col md:w-[80rem] md:flex-row md:items-center md:justify-between md:px-[2.625rem] md:py-6'>
        <div className='flex w-full items-center justify-between p-4 md:p-0'>
          <a className='text-2xl font-bold'>Logo</a>

          <button className='cursor-pointer md:hidden' onClick={toggleNavbar}>
            {isNavbarOpen ? (
              <XIcon color='black' size={36} />
            ) : (
              <MenuIcon color='black' size={36} />
            )}
          </button>
        </div>

        <ul
          className={twMerge(
            cn({ hidden: !isNavbarOpen, flex: isNavbarOpen }),
            'flex-col items-center justify-center gap-2 px-4 font-medium md:flex md:flex-row md:space-x-2 md:font-medium'
          )}
        >
          {linksMap.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              onClick={toggleNavbar}
              className='px-4 py-2 text-center md:opacity-80 md:hover:text-black md:hover:opacity-100'
            >
              <li>{item.label}</li>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};
