import { z, ZodType } from 'zod';
import { ContactFormData } from './ContactForm.types';

export const ContactFormSchema: ZodType<ContactFormData> = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' })
});
