import { InputProps } from '@/app/types';

export const Input = ({
  id,
  type = 'text',
  name,
  placeholder,
  errorMessage = ''
}: InputProps) => {
  return (
    <div className='flex flex-col gap-[0.125rem]'>
      <input
        id={id}
        name={name}
        type={type}
        className='bg-secondary border-secondary focus:border-primary w-full border-2 px-6 py-4 focus:ring-0 focus:outline-none'
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className='text-sm font-normal text-red-500'>{errorMessage}</span>
      )}
    </div>
  );
};
