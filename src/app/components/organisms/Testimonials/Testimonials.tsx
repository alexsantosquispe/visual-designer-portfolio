import { labels } from '@/app/constants';
import { TestimonialCard } from '../../atoms/TestimonialCard/TestimonialCard';

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
    <section className='py-[2.625rem} flex flex-col gap-4 p-4 md:gap-[2.625rem] md:px-6 md:py-[2.625rem]'>
      <h3 className='lading-[1.875rem] text-center text-[2rem] font-semibold'>
        {labels.testimonials.title}
      </h3>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {testimonialMap.map(({ description, name, photo, company }, index) => (
          <div key={`${name}-${company}-${index}`}>
            <TestimonialCard
              description={description}
              name={name}
              photo={photo}
              company={company}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
