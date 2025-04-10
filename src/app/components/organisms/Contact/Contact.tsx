import { labels } from '@/app/constants';
import { ContactForm } from '../../molecules/ContactForm/ContactForm';

export const Contact = () => {
  return (
    <section className='flex flex-col items-center gap-6 px-6 py-[2.625rem]'>
      <h3 className='lading-[1.875rem] text-center text-[2rem] font-semibold'>
        {labels.contact.title}
      </h3>
      <p className='w-1/2 text-[1.0625rem] font-normal'>
        {labels.contact.description}
      </p>
      <ContactForm />
    </section>
  );
};
