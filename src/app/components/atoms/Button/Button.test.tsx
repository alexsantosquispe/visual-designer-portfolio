import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  const onClickMock = jest.fn();
  const props = {
    title: 'button title',
    onClick: onClickMock
  };

  describe('Styles', () => {
    it('should render default button correctly', () => {
      let component = render(<Button {...props} />);
      expect(component).toMatchSnapshot();

      component = render(
        <Button {...props} type='submit' onClick={undefined} />
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('should button be disabled', () => {
      render(<Button {...props} disabled={true} />);

      const button = screen.getByText(props.title);

      expect(button).toBeInTheDocument();

      expect(button).toBeDisabled();
    });

    it('should call onclick', () => {
      render(<Button {...props} />);

      const button = screen.getByText(props.title);

      expect(button).toBeInTheDocument();

      fireEvent.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
