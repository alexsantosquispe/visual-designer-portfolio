import { labels } from '@/app/constants';
import { ContactForm } from '../../molecules/ContactForm/ContactForm';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center gap-6 p-4 md:px-6 md:py-[2.625rem]'
    >
      <h3 className='lading-[1.875rem] text-center text-[2rem] font-semibold'>
        {labels.contact.title}
      </h3>
      <p className='text-[1.0625rem] font-normal md:w-1/2'>
        {labels.contact.description}
      </p>
      <ContactForm />
    </section>
  );
};
