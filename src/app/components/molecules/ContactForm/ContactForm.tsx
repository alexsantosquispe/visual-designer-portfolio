import { labels } from '@/app/constants';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { useForm } from 'react-hook-form';
import { ContactFormData, ContactFormDataNames } from './ContactForm.types';
import { ContactFormSchema } from './ContactForm.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSaveContactFormData } from '@/app/hooks/useSaveContactFormData';

export const ContactForm = () => {
  const { saveFormDataToGSDoc } = useSaveContactFormData();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      [ContactFormDataNames.name]: '',
      [ContactFormDataNames.email]: '',
      [ContactFormDataNames.message]: ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    saveFormDataToGSDoc(data);
    reset();
  };

  return (
    <form
      className='flex flex-col gap-3 md:w-3/4 lg:w-1/2'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id={ContactFormDataNames.name}
        name={ContactFormDataNames.name}
        control={control}
        placeholder={labels.contact.form.name}
        errorMessage={errors[ContactFormDataNames.name]?.message}
      />
      <Input
        id={ContactFormDataNames.email}
        name={ContactFormDataNames.email}
        control={control}
        placeholder={labels.contact.form.email}
        errorMessage={errors[ContactFormDataNames.email]?.message}
      />
      <TextArea
        id={ContactFormDataNames.message}
        control={control}
        name={ContactFormDataNames.message}
        errorMessage={errors[ContactFormDataNames.message]?.message}
      />
      <Button title={labels.contact.form.submit} type='submit' />
    </form>
  );
};
