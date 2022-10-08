import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { InputButton } from '../../components/button/InputButton';

export const Profile = () => {
  const [personal, setPersonal] = React.useState([]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  }

  const getPersonal = () => {
    fetch('http://127.0.0.1:8000/api/personal/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('userToken')}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  React.useEffect(() => {
    getPersonal();
  }, [])

  const isLoggedIn = !!localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      <div>
        <div className='profile'>
          <p>id: </p>
        </div>
        <InputButton
          title='Logout'
          onClick={() => logout()}
        />
      </div>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}
