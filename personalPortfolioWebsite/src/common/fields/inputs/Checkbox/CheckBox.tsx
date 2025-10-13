import React from 'react';
import styles from './checkbox.module.css';

interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, ...props }) => {
  return (
    <label htmlFor=''>
      <input className={styles.checkbox} type='checkbox' checked={props.checked} {...props} />
      <span className={styles.custom_checkbox} />
    </label>
  );
};
