import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';

export const ContactForm = () => {
  return (
    <form className='flex w-1/2 flex-col gap-3'>
      {/* Here goes the fields */}
      <Input id='name' name='name' placeholder='Full name' />
      <Input id='email' name='email' placeholder='Email' />
      <TextArea id='message' name='message' placeholder='Write here...' />
      <Button
        title='Submit'
        onClick={() => {
          console.log('Submit button clicked');
        }}
      />
    </form>
  );
};
