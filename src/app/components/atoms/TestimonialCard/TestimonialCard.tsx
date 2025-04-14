import Image from 'next/image';

interface TestimonialCardProps {
  description: string;
  name: string;
  photo: string;
  company: string;
}

export const TestimonialCard = ({
  description,
  name,
  photo,
  company
}: TestimonialCardProps) => {
  return (
    <div className='bg-secondary flex w-fit flex-col gap-6 p-4 lg:gap-[4.25rem] lg:p-[2.625rem]'>
      <p className='text-[1.25rem] leading-[1.875rem] font-normal'>
        {description}
      </p>

      <div className='flex gap-4'>
        <div className='h-[3.125] w-[3.125rem]'>
          <Image src={photo} alt={name} width={50} height={50} />
        </div>

        <div className='flex flex-col'>
          <span className='text-[1.25rem] leading-[1.875rem] font-semibold'>
            {name}
          </span>
          <span className='text-[1.0625rem] leading-[1.875rem] font-normal'>
            {company}
          </span>
        </div>
      </div>
    </div>
  );
};
