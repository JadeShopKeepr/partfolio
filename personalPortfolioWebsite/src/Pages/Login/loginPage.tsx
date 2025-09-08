import React, { use } from 'react';
import { Input } from '../../common';
import { FormButton } from '../../common';
import styles from './loginPage.module.css';

const validateUsername = (value: string) => {
  if (!value) return 'щось тут має написано';
};
const validatePassword = (value: string) => {
  if (!value) return 'щось тут має написано';
};

const validateSchema = {
  username: validateUsername,
  password: validatePassword,
};

const validateLoginForm = (name: 'username' | 'password', value: string) => {
  return validateSchema;
};

interface formErrors {
  username: string | null;
  password: string | null;
}

export const LoginPage = () => {
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
                const error = validateUsername(username);
                return setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors['username'] && {
                isError: !!formErrors['username'],
                helperText: formErrors['username'],
              })}
            />
          </div>
          <div className={styles.input_container}>
            <Input
              isError={!!formErrors['password']}
              value={formValues.password}
              placeholder='пароль'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const password = event.target.value;
                setFormValues({ ...formValues, password });
                const error = validateUsername(password);
                return setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password,
              })}
            />
            <div className={styles.checkbox}>
              <img src='./src/assets/Exclude.svg' alt='' />
              <p>Запам'ятати вас</p>
            </div>
          </div>
          <FormButton>Увійти</FormButton>
        </div>
        <div className={styles.signUp}>немає аккаунта?</div>
      </div>
    </main>
  );
};
