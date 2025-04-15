import { SunIcon, MoonIcon } from 'lucide-react';
import { useState } from 'react';

export const LightDarkButton = ({ size = 24 }: { size?: number }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onClickHandler = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button className='cursor-pointer self-center' onClick={onClickHandler}>
      {!isDarkMode && (
        <MoonIcon size={size} className='text-primary md:hover:text-black' />
      )}
      {isDarkMode && <SunIcon size={size} className='text-white' />}
    </button>
  );
};
