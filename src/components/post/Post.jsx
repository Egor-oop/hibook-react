import React from 'react';
import './Post.css';

export const Post = ({text, date, author}) => {
  const convertDate = (invalidDate) => {
    const dateToConvert = new Date(Date.parse(invalidDate));
    return `${dateToConvert.getDate()}.${dateToConvert.getMonth()}.${dateToConvert.getFullYear()}`;
  }

  return (
    <div className='post'>
      <p className='post__text'>{text}</p>
      <div className='post__info'>
        <p className='post__date'>{convertDate(date).toString()}</p>
        <p className='post__author'>by {author}</p>
      </div>
    </div>
  )
}
