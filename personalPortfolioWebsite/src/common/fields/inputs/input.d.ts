export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  isError?: boolean;
  helperText?: string;
  label: string;
}
