import React from 'react';
import { useNavigate } from 'react-router';
import { Input, PasswordInput } from '@common';
import { FormButton } from '@common';
import styles from './loginPage.module.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const validateIsEmpty = (value: string) => {
    if (!value) return 'щось тут має написано';
    return null;
  };
  const validateUsername = (value: string) => {
    return validateIsEmpty(value);
  };
  const validatePassword = (value: string) => {
    return validateIsEmpty(value);
  };

  const validateSchema = {
    username: validateUsername,
    password: validatePassword,
  };

  const validateLoginForm = (name: keyof typeof validateSchema, value: string) => {
    return validateSchema[name](value);
  };

  interface formErrors {
    username: string | null;
    password: string | null;
  }
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = React.useState<{ [key: string]: string | null }>({ username: null, password: null });
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>DOGEEE</div>
        <div className={styles.form_body}>
          <div className={styles.input_container}>
            <Input
              value={formValues.username}
              placeholder='юзернейм'
              name='username'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const username = event.target.value;
                setFormValues({ ...formValues, username });
                const error = validateLoginForm('username', username);
                return setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors['username'] && {
                isError: !!formErrors['username'],
                helperText: formErrors['username'],
              })}
            />
          </div>
          <div className={styles.input_container}>
            <PasswordInput
              isError={!!formErrors['password']}
              value={formValues.password}
              placeholder='пароль'
              type='password'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password });
                const error = validateLoginForm('password', password);
                return setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password,
              })}
            />
            <div className={styles.checkbox}>
              <img src='./src/assets/Exclude.svg' alt='#' />
              <p>Запам'ятати вас</p>
            </div>
          </div>
          <FormButton>Увійти</FormButton>
        </div>
        <div onClick={() => navigate('/registration')} className={styles.signUp}>
          немає аккаунта?
        </div>
      </div>
    </main>
  );
};
