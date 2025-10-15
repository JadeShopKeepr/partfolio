import React from 'react';
import type { InputProps } from './input.d';
import styles from './input.module.css';

export const Input: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <div className={`${styles.input_container} ${isError ? styles.input_container : ''}`}>
        <input className={styles.input} {...props} />
        <label htmlFor='' className={styles.input_label}>
          {label}
        </label>
      </div>
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
