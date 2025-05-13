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
        'flex flex-col gap-2 overflow-hidden px-4 font-medium transition-all duration-300 md:flex-row md:gap-8 md:overflow-auto md:p-0 md:font-medium',
        cn({ 'h-0 md:h-auto': !isNavbarOpen, 'h-auto': isNavbarOpen })
      )}
    >
      {options.map((item, index) => (
        <li key={`${item.label}-${index}`}>
          <a
            href={item.href}
            onClick={onSelectOption}
            className='text-primary md:text-primary/70 md:hover:text-primary flex w-full py-2 font-medium md:px-2'
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
