import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { useForm } from 'react-hook-form';
import { FormWrapper } from '@/app/utils/tests';

const TestComponent = () => {
  const { control } = useForm();
  return (
    <Input id='1' name='fullName' placeholder='Full Name' control={control} />
  );
};

describe('Input component', () => {
  describe('Styles', () => {
    it('should render the component correctly', () => {
      render(
        <FormWrapper>
          <TestComponent />
        </FormWrapper>
      );

      expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    });
  });

  // describe('Behavior', () => {
  //   it('', () => {});
  // });
});
