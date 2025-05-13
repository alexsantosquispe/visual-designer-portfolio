import { CardProps } from '@/app/types';
import Image from 'next/image';

export const SkillCard = ({
  title,
  description,
  srcImage,
  altImage
}: CardProps) => {
  return (
    <div className='flex flex-col items-center gap-[2.625rem] px-4 py-3 md:px-[2.625rem] md:py-16'>
      <Image src={srcImage} width={124} height={124} alt={altImage} />
      <div className='w-fit space-y-3 text-center md:w-full'>
        <span className='text-xl font-semibold md:text-[1.6875rem]'>
          {title}
        </span>
        <p className='text-base font-normal md:text-[1.0625rem]'>
          {description}
        </p>
      </div>
    </div>
  );
};
