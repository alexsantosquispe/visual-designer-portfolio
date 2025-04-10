import { labels } from '@/app/constants';
import Image from 'next/image';

const testimonialMap = [
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  },
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  },
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  },
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  },
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  },
  {
    description: labels.testimonials.card.description,
    name: labels.testimonials.card.name,
    photo: '/user.png',
    company: labels.testimonials.card.company
  }
];

export const Testimonials = () => {
  return (
    <section className='py-[2.625rem} flex flex-col gap-[2.625rem] px-6 py-[2.625rem]'>
      <h3 className='lading-[1.875rem] text-center text-[2rem] font-semibold'>
        {labels.testimonials.title}
      </h3>
      <div className='grid grid-cols-3 gap-6'>
        {testimonialMap.map(({ description, name, photo, company }, index) => (
          <div key={`${name}-${company}-${index}`}>
            <div className='bg-secondary flex flex-col gap-[4.25rem] p-[2.625rem]'>
              <p className='text-[1.25rem] leading-[1.875rem] font-normal'>
                {description}
              </p>

              <div className='flex w-full gap-4'>
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
          </div>
        ))}
      </div>
    </section>
  );
};
