import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { InputButton } from '../../components/button/InputButton';

export const Profile = () => {
  const [personal, setPersonal] = React.useState([{}]);
  const [personalPosts, setPersonalPosts] = React.useState([]);

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
        setPersonal(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  React.useEffect(() => {
    getPersonal();
  }, [])

  const getPersonalPosts = () => {
    fetch(`http://127.0.0.1:8000/api/posts/?userid=${personal[0].id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPersonalPosts(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  React.useEffect(() => {
    if (personal[0].id !== undefined) {
      getPersonalPosts();
    }
  }, [personal])

  const isLoggedIn = !!localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      <div>
        <div className='profile'>
          <h2>{personal[0].username}</h2>
          <small>{personal[0].id}</small>
          <p>{personal[0].first_name} {personal[0].last_name}</p>
          <InputButton
            title='Logout'
            onClick={() => logout()}
          />
        </div>
        <div className='posts'>
          { personalPosts.map(post => (
            <h3>{post.text}</h3>
          )
          ) }
        </div>
      </div>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}
