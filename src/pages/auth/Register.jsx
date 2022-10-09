import React from 'react';
import './Auth.css';
import { MainButton } from '../../components/button/MainButton';
import { MainInput } from '../../components/input/MainInput';
import { Link, Navigate } from 'react-router-dom';

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

  const isLoggedIn = !localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      // <div className='auth__container'>
      //   <form className='auth__form'>
      //     <h1 className='auth__header'>Register</h1>
      //     <div className='auth__form-inputs'>
      //       <AuthInput
      //         type='text'
      //         label='Username'
      //         value={username}
      //         onChange={(e) => setUsername(e.target.value)}
      //       />
      //       <AuthInput
      //         type='email'
      //         label='Email'
      //         value={email}
      //         onChange={(e) => setEmail(e.target.value)}
      //       />
      //       <AuthInput
      //         type='password'
      //         label='Password'
      //         value={password}
      //         onChange={(e) => setPassword(e.target.value)}
      //       />
      //       <AuthInput
      //         type='password'
      //         label='Repeat password'
      //         value={password2}
      //         onChange={(e) => setPassword2(e.target.value)}
      //       />
      //       <InputButton
      //         title='Register'
      //         onClick={() => register()}
      //       />
      //     </div>
      //     <p>
      //       Already have an account? <Link to='/login'>Log In</Link>
      //     </p>
      //   </form>
      // </div>
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
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <MainInput
                type='password'
                placeholder='Confirm password'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                style={{ width: '425px' }}
                required
              />
            </div>
            <MainButton
              title='Log In'
              onClick={() => register()}
              style={{ 'max-width': '120px' }}
              wrapperStyle={{ 'text-align': 'center' }}
            />
          </div>
          <p className='auth__question-text'>
            Already have an account? <Link to='/login'>Log In</Link>
          </p>
        </form>
      </div>
    )
  } else {
    return <Navigate to='/profile' />
  }
}
