import { ContactFormData } from '../components/molecules/ContactForm/ContactForm.types';

const scriptURL = `https://script.google.com/macros/s/${process.env.DOCUMENT_ID}/exec`;

export const useSaveContactFormData = () => {
  const saveFormDataToGSDoc = async (formData: ContactFormData) => {
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', //TODO: This is a temporary workaround, it'll be fixed in the next task
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return { saveFormDataToGSDoc };
};
