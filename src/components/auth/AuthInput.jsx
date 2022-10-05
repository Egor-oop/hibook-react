import React from 'react';
import './AuthInput.css'

export const AuthInput = ({type, label, placeholder, inputId, inputName, value, ...props }) => {
  return (
    <div className='auth-input'>
      <label className='auth-input__label'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={inputId}
        name={inputName}
        value={value}
        { ...props }
        className='auth-input__input'
        autoCapitalize='off'
        autoCorrect='off'
      />
    </div>
  )
}
