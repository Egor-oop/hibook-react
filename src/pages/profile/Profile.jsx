import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputButton } from '../../components/button/InputButton';

export const Profile = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  }

  const isLoggedIn = !!localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      <div>
        Profile
        <InputButton
          title='Logout'
          onClick={() => logout()}
        />
      </div>
    )
  }
}
