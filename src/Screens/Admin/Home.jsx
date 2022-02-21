import React, { useState } from 'react'
import { useContext } from 'react'
import {UserContext} from '../../Context/UserContext'
import EditUserForm from '../../Comps/EditUser/EditUserForm';

export default function Home() {
  const {users, RemoveUser} = useContext(UserContext); 
  const [user, SetUser] = useState(null);
  const [isEditVisible, SetIsEditVisible] = useState(false);

  function ShowEdit(user){
    SetUser(user)
    SetIsEditVisible(true);
  }

  function DeleteUser(user){
    if(window.confirm(`אתה עומד לבצע פעולה בלתי הפיכה, האם להמשיך`))
      RemoveUser(user);
  }

  return (
    <div>
        <table>
          {
          users.map((user)=>
          user.email!=`admin@admin.com` ?
          <tr>
            <td>
              {user.firstName}
            </td>
            <td>
              {user.lastName}
            </td>
            <td>
              {user.email}
            </td>
            <button className='btn btn-primary' onClick={()=>{ShowEdit(user)}}>עדכן פרטים</button>
            <button className='btn btn-danger' onClick={()=>{DeleteUser(user)}}>X</button>
          </tr>
          :
          null
          )
          }
        </table>
        {isEditVisible ? <EditUserForm user={user} setUser={SetUser} setVisibility={SetIsEditVisible}/> : null}
    </div>
  )
}
