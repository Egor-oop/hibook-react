import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { InputButton } from '../../components/button/InputButton';
import { Post } from '../../components/post/Post';
import './Profile.css';

export const MyProfile = () => {
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

  // let myDate = new Date(Date.parse('2022-09-17T12:58:24.433068Z'));
  // let date = myDate.get
  // console.log(date);

  const isLoggedIn = !!localStorage.getItem('userToken');
  if (isLoggedIn) {
    return (
      <div className='main-container'>
        <div className='profile'>
          <div className='profile__data'>
            <h2 className='profile__username'>{personal[0].username}</h2>
            <p className='profile__id'>ID: {personal[0].id}</p>
            <p className='profile__fullname'>{personal[0].first_name} {personal[0].last_name}</p>
          </div>
          <div className='profile__image'>

          </div>
          {/* <InputButton
            title='Logout'
            onClick={() => logout()}
          /> */}
        </div>
        <div className='posts'>
          <h2 style={{'marginBottom': '50px'}}>My posts</h2>
          <div className="posts__posts">
            {personalPosts.map(post => (
              <Post
                text={post.text}
                date={post.created_at}
                author={post.user}
                key={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}
