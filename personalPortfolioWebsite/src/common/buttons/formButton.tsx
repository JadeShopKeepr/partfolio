import React from 'react';
import styles from './formButton.module.css';
interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const FormButton: React.FC<FormButtonProps> = ({ children, isLoading = false }) => {
  return (
    <button className={styles.button}>
      {!isLoading && children}
      {isLoading && <div className={styles['dot-elastic']}></div>}
    </button>
  );
};
