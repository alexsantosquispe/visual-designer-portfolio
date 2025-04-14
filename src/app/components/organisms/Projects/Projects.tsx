import { labels } from '@/app/constants';
import { ProjectCard } from '../../atoms/ProjectCard/ProjectCard';

const projectsMap = [
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-1.png'
  },
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-2.png'
  },
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-3.png'
  },
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-4.png'
  },
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-5.png'
  },
  {
    title: labels.projects.project.title,
    description: labels.projects.project.description,
    src: '/project-6.png'
  }
];

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex flex-col justify-center gap-4 p-4 md:gap-[2.625rem] md:px-6 md:py-[2.625rem]'
    >
      <h3 className='lading-[1.875rem] text-center text-[2rem] font-semibold'>
        {labels.projects.project.title}
      </h3>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
        {projectsMap.map(({ title, description, src }, index) => (
          <div key={`${title}-${index}`} className='flex justify-center'>
            <ProjectCard
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
