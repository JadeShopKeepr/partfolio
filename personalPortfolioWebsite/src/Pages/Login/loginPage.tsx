import React from 'react';
import { useNavigate } from 'react-router';
import { CheckBox, Input, PasswordInput } from '@common';
import { FormButton } from '@common';
import { useMutation, useQueryLazy } from '../../utils/hooks/api';
import styles from './loginPage.module.css';

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

interface User {
  username: string;
  password: string;
  id: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({ username: '', password: '', notMyDevice: false });
  const [formErrors, setFormErrors] = React.useState<{ [key: string]: string | null }>({ username: null, password: null });

  const {
    mutation: AuthMutation,
    isError,
    isLoading: AuthLoading,
    status,
  } = useMutation<typeof formValues, User>('http://localhost:5050/auth', 'POST');

  const { query } = useQueryLazy<User>('http://localhost:5050/users');

  interface formErrors {
    username: string | null;
    password: string | null;
  }
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>DOGGEE</div>
        <form
          className={styles.form_body}
          onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            //const response = await AuthMutation(formValues);
            const response = await query();
            console.log('🚀 ~ response:', response);
          }}>
          <div className={styles.input_container}>
            <Input
              disabled={AuthLoading}
              value={formValues.username}
              label='юзернейм'
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
              disabled={AuthLoading}
              isError={!!formErrors['password']}
              value={formValues.password}
              label='пароль'
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
          </div>
          <div className={styles.checkbox}>
            <div className={styles.input_container}>
              <CheckBox
                disabled={AuthLoading}
                label='Це не мій девайс'
                checked={formValues.notMyDevice}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(event.target.checked);
                  const notMyDevice = event.target.checked;
                  setFormValues({ ...formValues, notMyDevice });
                }}
              />
            </div>
          </div>
          <FormButton type='submit'>Увійти</FormButton>
        </form>
        <div onClick={() => navigate('/registration')} className={styles.signUp}>
          немає аккаунта?
        </div>
      </div>
    </main>
  );
};
