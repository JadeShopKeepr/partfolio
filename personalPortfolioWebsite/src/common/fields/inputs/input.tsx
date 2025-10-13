import React from 'react';
import styles from './input.module.css';

export const Input: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState(!!props.value ?? false);
  return (
    <>
      <div
        onClick={() => {
          inputRef.current?.focus();
          setIsFocused(true);
        }}
        className={`${styles.input_container} ${isError ? styles.input_container : ''} ${isFocused ? styles.focused : ''}`}>
        <label htmlFor='' className={styles.input_label}>
          {label}
        </label>
        <input
          className={styles.input}
          onBlur={() => {
            !props.value && setIsFocused(false);
          }}
          {...props}
        />
      </div>
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
