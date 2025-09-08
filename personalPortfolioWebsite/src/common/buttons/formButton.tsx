import React from 'react';
import styles from './formButton.module.css';
interface FormButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
