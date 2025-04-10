export type IconType = {
  color?: string;
};

export interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
}

export type TextAreaProps = Pick<
  InputProps,
  'id' | 'name' | 'placeholder' | 'errorMessage'
> & {
  rows?: number;
  cols?: number;
};

export interface CardProps {
  title: string;
  description: string;
  srcImage: string;
  altImage: string;
}
