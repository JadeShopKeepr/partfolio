import React, { use } from 'react';
import { Input } from '../../common';
import { FormButton } from '../../common';
import styles from './loginPage.module.css';
export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>Header</div>
        <div className={styles.form_body}>
          <div className={styles.input_container}>
            <Input
              value={formValues.username}
              isError={true}
              helperText='перевійрте пліз'
              name='username'
              placeholder='юзернейм'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, username: event.target.value })}
            />
          </div>
          <div className={styles.input_container}>
            <Input
              value={formValues.password}
              placeholder='пароль'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, password: event.target.value })}
            />
          </div>
          <FormButton>Увійти</FormButton>
        </div>
      </div>
    </main>
  );
};
