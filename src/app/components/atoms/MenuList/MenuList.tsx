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
        <li key={`${item.label}-${index}`}>
          <a
            href={item.href}
            onClick={onSelectOption}
            className='text-primary/70 md:hover:text-primary w-full px-4 py-2 font-medium'
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
