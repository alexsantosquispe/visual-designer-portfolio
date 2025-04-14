import { labels } from '@/app/constants';
import { SkillCard } from '../../atoms/SkillCard/SkillCard';

const skillsMap = [
  {
    title: labels.services.productDesign.title,
    description: labels.services.productDesign.description,
    src: '/skill-1.png'
  },
  {
    title: labels.services.visualDesign.title,
    description: labels.services.visualDesign.description,
    src: '/skill-2.png'
  },
  {
    title: labels.services.artDesign.title,
    description: labels.services.artDesign.description,
    src: '/skill-3.png'
  }
];

export const Services = () => {
  return (
    <section className='flex w-full p-4 md:px-6 md:py-[2.625rem]'>
      <div className='flex w-full flex-col gap-4 md:flex-row md:gap-6'>
        {skillsMap.map(({ title, description, src }, index) => (
          <div key={`${title}-${index}`}>
            <SkillCard
              title={title}
              description={description}
              srcImage={src}
              altImage={title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
