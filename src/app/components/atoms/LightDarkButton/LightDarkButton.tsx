import { SunIcon, MoonIcon } from 'lucide-react';
import { useState } from 'react';

export const LightDarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onClickHandler = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className='cursor-pointer self-center' onClick={onClickHandler}>
      {!isDarkMode && (
        <MoonIcon size={26} className='text-primary md:hover:text-black' />
      )}
      {isDarkMode && <SunIcon size={26} className='text-white' />}
    </button>
  );
};
