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
    <div style={{textAlign:'center'}}>
      <h1 style={{marginTop:'15px'}}>טבלת משתמשים</h1>
        <table style={{}}>
          {
          users.map((user, index)=>
          user.email!=`admin@admin.com` ?
          <tr key={index} style={{}}>
            <td style={{paddingLeft:'20px', color:'white', marginTop:'15px'}}>
              {user.firstName}
            </td>
            <td style={{paddingLeft:'20px', color:'white', marginTop:'15px'}}>
              {user.lastName}
            </td>
            <td style={{paddingLeft:'20px', marginTop:'15px'}}>
              {user.email}
            </td>
            <button className='btn btn-success' style={{marginTop:'15px', marginLeft:'20px'}} onClick={()=>{ShowEdit(user)}}>עדכן פרטים</button>
            <button className='btn btn-danger' style={{marginLeft:'20px', marginTop:'15px'}} onClick={()=>{DeleteUser(user)}}>X</button>
          </tr>
          :
          null
          )
          }
        </table>
        {isEditVisible ? <EditUserForm user={user} setUser={SetUser} setVisibility={SetIsEditVisible}/> : null}
        {/*הצגת טופס העריכה במידה והאדמין לחץ על עדכון פרטים */}
    </div>
  )
}
