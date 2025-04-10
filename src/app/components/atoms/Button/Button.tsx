'use client';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className='bg-primary w-fit cursor-pointer px-16 py-6 text-[1.25rem] font-semibold text-white hover:bg-black'
      onClick={onClick}
    >
      {title}
    </button>
  );
};
