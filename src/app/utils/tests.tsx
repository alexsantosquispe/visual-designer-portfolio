import { FormProvider, useForm } from 'react-hook-form';

export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({ defaultValues: { email: '' } });
  return <FormProvider {...methods}>{children} </FormProvider>;
};
