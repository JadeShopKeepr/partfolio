import React from 'react';
import { Input } from '../../common';
import './loginPage.css';
export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', password: '' });
  return (
    <main>
      <div className='container'>
        <div className='header'>Header</div>
        <div className='form_body'>
          <div className='input_container'>
            <Input value={formValues.username} placeholder='Юзернейм' />
            <span>validation</span>
          </div>
          <div className='input_container'>
            <Input value={formValues.password} placeholder='Пароль' />
          </div>
          <div className='btn_container'>
            <button>Увійти</button>
          </div>
        </div>
      </div>
    </main>
  );
};
