'use client';

import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

interface ButtonProps {
  title: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  title,
  type = 'button',
  disabled = false,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        cn({
          'bg-primary cursor-not-allowed opacity-75': disabled,
          'bg-primary cursor-pointer hover:bg-black': !disabled
        }),
        'w-fit self-center rounded-xl px-8 py-4 text-[1.25rem] font-semibold text-white md:self-auto'
      )}
      onClick={typeof onClick === 'function' ? onClick : undefined}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
