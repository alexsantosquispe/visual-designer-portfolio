import { CardProps } from '@/app/types';
import Image from 'next/image';

export const SkillCard = ({
  title,
  description,
  srcImage,
  altImage
}: CardProps) => {
  return (
    <div className='flex flex-col items-center gap-[2.625rem] px-[2.625rem] py-16'>
      <Image src={srcImage} width={124} height={124} alt={altImage} />
      <div className='w-full space-y-3'>
        <h5 className='text-center text-[1.6875rem] font-semibold'>{title}</h5>
        <p className='text-center text-[1.0625rem] font-normal'>
          {description}
        </p>
      </div>
    </div>
  );
};
