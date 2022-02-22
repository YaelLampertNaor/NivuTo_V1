import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../Context/UserContext';

export default function Login(props) {
    //מאפשר לנו להשתמש בפונקציה פיינד יוזר מתוך הקונטקסט יוזר קונטקסט
    const {FindUser}=useContext(UserContext);
    //אתחול משתנה קבוע של ניווט
    const navigate = useNavigate();
    //אתחול יוז סטייטים קבועים
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    //למטה: אתחול יוז סטייט של מערך אובייקטים המכיל אובייקטים של יוזר
    
    function LoginBtnClick() {
            let result = FindUser(email, password)
            if (!result){
                alert(`No match`);
                return;
            }
            if(result && email === `admin@admin.com`){
                navigate(`/adminHome`);
            }
            else{
                navigate(`/profile`);
            }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop:'10px'}}>
            <h1>כניסת משתמש</h1>
            <div style={{borderStyle:'groove', padding:'50px'}}>
            <div class="form-floating mb-3">
                <input style={{borderRadius:'7%'}} onChange={event => setEmail(event.target.value)} value={email} type="email" id="loginEmail" class="form-control" placeholder="אימייל" />
                <label for="loginEmail">אימייל:</label>
            </div>
            <div class="form-floating" style={{ marginTop: '15px' }}>
                <input style={{borderRadius:'7%'}} onChange={event => setPassword(event.target.value)} value={password} type="password" id="loginPassword" class="form-control" placeholder="סיסמא" />
                <label for="loginPassword">סיסמא:</label>
            </div>
            <button style={{ blockSize: '40px', width: '70px', marginRight: '60px', marginTop: '20px' }} class="btn btn-success" onClick={LoginBtnClick}>כניסה</button>
            </div>
        </div>
    )
}