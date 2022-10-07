import React from 'react';
import './Auth.css';
import { AuthInput } from '../../components/auth/AuthInput';
import { InputButton } from '../../components/button/InputButton';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const register = () => {
    fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password2: password2,
        email: email
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className='auth__container'>
      <form className='auth__form'>
        <h1 className='auth__header'>Register</h1>
        <div className='auth__form-inputs'>
          <AuthInput
            type='text'
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <AuthInput
            type='email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthInput
            type='password'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthInput
            type='password'
            label='Repeat password'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <InputButton
            title='Register'
            onClick={() => register()}
          />
        </div>
        <p>
          Already have an account? <Link to='/login'>Log In</Link>
        </p>
      </form>
    </div>
  )
}
