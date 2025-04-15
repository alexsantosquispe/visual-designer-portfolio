export const ContactFormDataNames = {
  name: 'name',
  email: 'email',
  message: 'message'
};

export type ContactFormData = {
  [ContactFormDataNames.name]: string;
  [ContactFormDataNames.email]: string;
  [ContactFormDataNames.message]: string;
};
