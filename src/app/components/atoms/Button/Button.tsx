'use client';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className='bg-primary w-fit cursor-pointer self-center px-8 py-4 text-[1.25rem] font-semibold text-white hover:bg-black md:self-auto md:px-16 md:py-6'
      onClick={onClick}
    >
      {title}
    </button>
  );
};
