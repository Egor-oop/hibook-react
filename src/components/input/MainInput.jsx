import React from 'react';
import './MainInput.css'

export const MainInput = ({ type, label, placeholder, inputId, inputName, value, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={inputId}
      name={inputName}
      value={value}
      {...props}
      className='main-input'
      autoCapitalize='off'
      autoCorrect='off'
    />
  )
}
