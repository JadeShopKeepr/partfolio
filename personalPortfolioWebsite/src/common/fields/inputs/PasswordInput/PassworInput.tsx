import React from 'react';
import styles from '@common/fields/inputs/input.module.css';

export const PasswordInput: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState(!!props.value ?? false);
  const [showToggle, setShowToggle] = React.useState(false);
  const showPassToggle = props.value;
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
          type={showPassToggle && showToggle ? 'text' : 'password'}
          onBlur={() => {
            !props.value && setIsFocused(false);
          }}
          {...props}
        />
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
