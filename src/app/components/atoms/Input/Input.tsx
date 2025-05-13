import { InputProps } from '@/app/types';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

export const Input = ({
  id,
  type = 'text',
  name,
  control,
  placeholder = '',
  errorMessage = ''
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <div className='flex flex-col gap-[0.125rem]'>
            <input
              id={id}
              name={name}
              aria-label={name}
              type={type}
              className={twMerge(
                cn({
                  'border-rose-500': !!errorMessage,
                  'border-secondary': !errorMessage
                }),
                'bg-secondary focus:border-primary w-full rounded-lg border-1 px-6 py-4 focus:ring-0 focus:outline-none'
              )}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
            {errorMessage && (
              <span className='text-xs font-normal text-rose-500'>
                {errorMessage}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
