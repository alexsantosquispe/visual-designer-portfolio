import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

interface MenuItem {
  href: string;
  label: string;
}

interface MenuListProps {
  isNavbarOpen: boolean;
  options: MenuItem[];
  onSelectOption: () => void;
}

export const MenuList = ({
  isNavbarOpen,
  options,
  onSelectOption
}: MenuListProps) => {
  return (
    <ul
      className={twMerge(
        'flex flex-col items-center justify-center gap-2 overflow-hidden px-4 font-medium transition-all duration-300 md:flex md:flex-row md:space-x-2 md:overflow-auto md:font-medium',
        cn({ 'h-0 md:h-auto': !isNavbarOpen, 'h-[136px]': isNavbarOpen })
      )}
    >
      {options.map((item, index) => (
        <a
          key={`${item.label}-${index}`}
          href={item.href}
          onClick={onSelectOption}
          className='w-full px-4 py-2 md:opacity-90 md:hover:text-black md:hover:opacity-100'
        >
          <li>{item.label}</li>
        </a>
      ))}
    </ul>
  );
};
