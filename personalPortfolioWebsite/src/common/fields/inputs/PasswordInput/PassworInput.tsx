import React from 'react';
import styles from '@common/fields/inputs/input.module.css';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type'> {
  isError?: boolean;
  helperText?: string;
}

export const PasswordInput: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  const [showToggle, setShowToggle] = React.useState(false);
  const showPassToggle = props.value;
  const Classname = isError ? styles.error : styles.input;
  return (
    <div className={styles.input_container}>
      <input className={Classname} {...props} type={showPassToggle && showToggle ? 'text' : 'password'} />
      {isError && helperText && <div className={styles.helperText}>{helperText}</div>}
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
  );
};
