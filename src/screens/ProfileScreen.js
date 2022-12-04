import React from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from '../features/counter/userSlice';
import Nav from '../Nav';
import { auth } from "../firebase"
import "./ProfileScreen.css"
import PlansScreen from './PlansScreen';

const ProfileScreen = () => {
  const user = useSelector(selectuser)
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>

        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          />
          <div className='profileScreen_details'>
            <h2>{user.email}</h2>
            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <PlansScreen />
              <button className='profileScreen_signOut' onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
