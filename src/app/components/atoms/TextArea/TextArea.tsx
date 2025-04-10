import { TextAreaProps } from '@/app/types';

export const TextArea = ({
  id,
  name,
  placeholder = '',
  rows = 6,
  cols = 50,
  errorMessage = ''
}: TextAreaProps) => {
  return (
    <div className='flex flex-col gap-[0.125rem]'>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className='bg-secondary border-secondary focus:border-primary w-full resize-none border-2 px-6 py-4 focus:ring-0 focus:outline-none'
      ></textarea>
      {errorMessage && (
        <span className='text-sm font-normal text-red-500'>{errorMessage}</span>
      )}
    </div>
  );
};
