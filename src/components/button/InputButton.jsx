import React from 'react';

export const InputButton = ({title, ...props}) => {
  return (
    <input
      type='button'
      value={title}
      {...props}
    />
  )
}
