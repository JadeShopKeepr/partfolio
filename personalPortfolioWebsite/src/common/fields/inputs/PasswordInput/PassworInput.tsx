import React from 'react';
import type { InputProps } from '../input.d';
import styles from '@common/fields/inputs/input.module.css';

export const PasswordInput: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showToggle, setShowToggle] = React.useState(false);
  const showPassToggle = props.value;
  return (
    <>
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        className={`${styles.input_container} ${isError ? styles.input_container : ''}`}>
        <input className={styles.input} type={showPassToggle && showToggle ? 'text' : 'password'} {...props} />
        <label htmlFor='' className={styles.input_label}>
          {label}
        </label>
        {showPassToggle && (
          <div
            className={styles.input_icon}
            onClick={() => {
              setShowToggle(!showToggle);
            }}>
            {showToggle ? <img src='src/assets/open_eye.svg' /> : <img src='src/assets/not_open_eye.svg' />}
          </div>
        )}
      </div>
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
    </>
  );
};
