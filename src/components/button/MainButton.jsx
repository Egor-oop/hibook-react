import React from 'react';
import './MainButton.css';

export const MainButton = ({ title, wrapperStyle, ...props }) => {
  return (
    <div style={wrapperStyle}>
      <input
        type='button'
        value={title}
        {...props}
        className='main-button'
      />
    </div>
  )
}
