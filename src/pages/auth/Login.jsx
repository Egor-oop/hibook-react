import React from 'react';
import './Auth.css';
import { AuthInput } from '../../components/auth/AuthInput';
import { InputButton } from '../../components/button/InputButton';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const login = () => {
    fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username, password: password}),
    })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('userToken', data.token);
      navigate('/profile')
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // if (localStorage.getItem('userToken') !== null) {
  //   console.log(localStorage.getItem('userToken'));
  //   return (
  //     <div>
  //       You're already logged in
  //       <InputButton
  //       title='Log Out'
  //       onClick={() => {}}
  //       />
  //     </div>
  //   )
  // }
  return (
    <div className='auth__container'>
      <form className='auth__form'>
        <h1 className='auth__header'>Log In</h1>
        <div className='auth__form-inputs'>
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
            onClick={() => login()}
          />
        </div>
      </form>
    </div>
  )
}
