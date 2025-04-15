import { CardProps } from '@/app/types';
import Image from 'next/image';

export const ProjectCard = ({
  title,
  description,
  srcImage,
  altImage
}: CardProps) => {
  return (
    <div className='flex flex-col justify-center gap-6'>
      <div className='hidden md:flex'>
        <Image
          src={srcImage}
          width={394}
          height={330}
          alt={altImage}
          className='h-auto w-auto rounded-2xl'
        />
      </div>
      <div className='flex md:hidden'>
        <Image
          src={srcImage}
          width={310}
          height={200}
          alt={altImage}
          className='h-auto w-auto rounded-2xl'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className='text-[1.25rem] leading-[1.875rem] font-semibold'>
          {title}
        </h5>
        <p className='text-[1.0625rem] leading-[1.0625rem] font-normal'>
          {description}
        </p>
      </div>
    </div>
  );
};
