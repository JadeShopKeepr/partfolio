import React from 'react';
import './formButton.css';
interface FormButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
