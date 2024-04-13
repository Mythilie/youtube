import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Cricket"/>
      <Button name="Love"/>
    </div>
  )
}

export default ButtonList