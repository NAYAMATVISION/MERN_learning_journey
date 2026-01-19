import React from 'react'
import cute from '../assets/cute.jpg'
import './UserCard.css'
//functional component
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <h1 id='user-name'>{props.name}</h1>
      <img id='user-img' src={cute} alt="yeeeei" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
