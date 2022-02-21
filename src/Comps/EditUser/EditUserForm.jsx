import React, { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export default function EditUserForm(props) {
    const {EditUser} = useContext(UserContext)
    return (<div>
        <h1 style={{ textAlign: 'center' }}>עדכון פרטים אישיים</h1>
        <div style={{borderStyle:'groove', padding:'50px'}}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <table>
                    <tr>
                        <td><label for="floatingFirstName">שם פרטי: </label></td>
                        <td><input value={props.user.firstName} onChange={(e) => { props.setUser((prev) => ({ ...prev, firstName: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingFirstName" placeholder="שם פרטי" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingLastName"></label>שם משפחה:</td>
                        <td><input value={props.user.lastName} onChange={(e) => { props.setUser((prev) => ({ ...prev, laststName: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingLastName" placeholder="שם משפחה" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingEmail">אימייל:</label></td>
                        <td><input readOnly={true} value={props.user.email} onChange={(e) => { props.setUser((prev) => ({ ...prev, email: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="email" class="form-control" id="floatingEmail" placeholder="אימייל" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingPassword"></label>הזן סיסמא:</td>
                        <td><input value={props.user.password} onChange={(e) => { props.setUser((prev) => ({ ...prev, password: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="password" class="form-control" id="floatingPassword" placeholder="בחר סיסמא" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingPhone"></label>טלפון:</td>
                        <td><input value={props.user.phone} onChange={(e) => { props.setUser((prev) => ({ ...prev, phone: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingPhone" placeholder="טלפון" /></td>
                    </tr>
                </table>
                <br />
                <button onClick={()=>{
                    EditUser(props.user);
                    props.setVisibility(false);
                    }} style={{ width: '100px', marginTop: '30px' }}>עדכון</button>
            </div>
        </div>
    </div >
    )
}

