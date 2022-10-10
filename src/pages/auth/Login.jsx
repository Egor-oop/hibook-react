import React from 'react';
import './Auth.css';
import { InputButton } from '../../components/button/InputButton';
import { MainButton } from '../../components/button/MainButton';
import { MainInput } from '../../components/input/MainInput';
import { Link, Navigate, useNavigate } from 'react-router-dom';

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
      body: JSON.stringify({ username: username, password: password }),
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

  const isLoggedIn = !localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      <div className='auth__container'>
        <form className='auth__form'>
          <h1 className='auth__header'>Log In</h1>
          <div className='auth__form-inputs'>
            <div className='auth__form-data-inputs'>
              <MainInput
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '425px' }}
                required
              />
              <MainInput
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '425px' }}
                required
              />
            </div>
            <MainButton
              title='Log In'
              onClick={() => login()}
              style={{'max-width': '120px'}}
              wrapperStyle={{'text-align': 'center'}}
            />
          </div>
          <p className='auth__question-text'>
            Don't have an account? <Link to='/register'>Register new</Link>
          </p>
        </form>
      </div>
    )
  } else {
    return <Navigate to='/me' />
  }
}
