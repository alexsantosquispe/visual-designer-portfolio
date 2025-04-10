import { CardProps } from '@/app/types';
import Image from 'next/image';

export const ProjectCard = ({
  title,
  description,
  srcImage,
  altImage
}: CardProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <Image src={srcImage} width={394} height={330} alt={altImage} />
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
