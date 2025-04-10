import { labels } from '@/app/constants';

export const Navbar = () => {
  return (
    <header className='fixed flex h-[4.875rem] w-full justify-center bg-white opacity-80'>
      <nav className='flex w-[80rem] items-center justify-between px-[2.625rem] py-6'>
        <a className='text-2xl font-bold'>Logo</a>
        <ul className='flex space-x-6 font-medium'>
          <li>{labels.navBar.about}</li>
          <li>{labels.navBar.work}</li>
          <li>{labels.navBar.contact}</li>
        </ul>
      </nav>
    </header>
  );
};
