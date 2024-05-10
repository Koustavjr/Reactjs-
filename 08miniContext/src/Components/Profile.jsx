import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
export default function Profile() {
    const {user}=useContext(UserContext);
   if(!user) return <h2>please Login</h2>
   console.log(user.userName);
   return <div>Welcome {user.userName}</div>
}
//export default Profile
