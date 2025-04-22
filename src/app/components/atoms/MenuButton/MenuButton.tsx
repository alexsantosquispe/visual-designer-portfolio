import { MenuIcon, XIcon } from 'lucide-react';

interface MenuButtonProps {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

export const MenuButton = ({ isNavbarOpen, toggleNavbar }: MenuButtonProps) => {
  return (
    <button className='cursor-pointer md:hidden' onClick={toggleNavbar}>
      {isNavbarOpen ? (
        <XIcon size={36} className='text-primary' />
      ) : (
        <MenuIcon size={36} className='text-primary' />
      )}
    </button>
  );
};
