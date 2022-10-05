import React from 'react';
import './Auth.css';
import { AuthInput } from '../../components/auth/AuthInput';
import { InputButton } from '../../components/button/InputButton';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const getDataFromForm = () => {
    console.log(`username: ${username}\npassword: ${password}`);
  }

  return (
    <div className='auth__container'>
      <form className='auth__form'>
        <h1 className='auth__header'>Log In</h1>
        <div className="auth__form-inputs">
          <AuthInput
            type='text'
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AuthInput
            type='password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputButton
            title='Log In'
            onClick={() => getDataFromForm()}
          />
        </div>
      </form>
    </div>
  )
}
