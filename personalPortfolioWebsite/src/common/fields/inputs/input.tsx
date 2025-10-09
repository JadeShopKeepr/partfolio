import React from 'react';
import styles from './input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  const Classname = isError ? styles.error : styles.input;
  return (
    <div className={styles.input_container}>
      <input className={Classname} {...props} />
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};
