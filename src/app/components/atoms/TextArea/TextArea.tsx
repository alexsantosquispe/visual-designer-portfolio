import { TextAreaProps } from '@/app/types';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import cn from 'clsx';

export const TextArea = ({
  id,
  name,
  placeholder = '',
  rows = 6,
  cols = 50,
  errorMessage = '',
  control
}: TextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div className='flex flex-col gap-[0.125rem]'>
            <textarea
              id={id}
              name={name}
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              className={twMerge(
                cn({
                  'border-red-500': !!errorMessage,
                  'border-secondary focus:border-primary': !errorMessage
                }),
                'bg-secondary w-full resize-none rounded-xl border-1 px-6 py-4 focus:ring-0 focus:outline-none'
              )}
              onChange={onChange}
              value={value}
            ></textarea>
            {errorMessage && (
              <span className='text-sm font-normal text-red-500'>
                {errorMessage}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
