import { labels } from '@/app/constants';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';

export const ContactForm = () => {
  return (
    <form className='flex flex-col gap-3 md:w-1/2'>
      {/* Here goes the fields */}
      <Input id='name' name='name' placeholder={labels.contact.form.name} />
      <Input id='email' name='email' placeholder={labels.contact.form.email} />
      <TextArea id='message' name='message' />
      <Button
        title={labels.contact.form.submit}
        onClick={() => {
          console.log('Submit button clicked');
        }}
      />
    </form>
  );
};
