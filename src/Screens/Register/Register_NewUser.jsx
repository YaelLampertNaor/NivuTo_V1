import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Register_NewUser(props) {
    const navigate = useNavigate();

    const {AddUser} = useContext(UserContext);

    const [school, setSchool] = useState(`1`);

    const [user, setUser] = useState({ firstName: ``, lastName: ``, email: ``, password: ``, phone: `` })

    function registerBtnClick(e) {
        if(AddUser(user))
            {
                alert(`נרשמת בהצלחה`)
                navigate(`/login`)
            }
        else{
            alert(`קרתה בעיה בהרשמה`)
        }
    }
    const ShowEngineerOption = () => {
        return (
            <div class="form-floating" id="engineerTrue" style={{ visibility: '' }}>
                <div class="form-floating">
                    <select class="form-select" id="floatingEngineerMegama" aria-label="Floating label select example">
                        <option selected>מגמה</option>
                        <option value="1">תוכנה</option>
                        <option value="2">רכב</option>
                        <option value="3">אדריכלות</option>
                        <option value="4">נוף</option>
                        <option value="5">בניין</option>
                    </select>
                    <label for="floatingEngineerMegama"></label>
                    <br />
                    <select class="form-select" id="floatingEngineerYear" aria-label="Floating label select example">
                        <option selected>שנת לימודים</option>
                        <option value="1">א'</option>
                        <option value="2">ב'</option>
                        <option value="3">ג'</option>
                    </select>
                    <label for="floatingEngineerYear"></label>
                </div>
            </div>
        )
    }
    const ShowAcademyOption = () => {
        return (
            <div class="form-floating" id="academyTrue" style={{ textAlign: 'right', visibility: '' }}>
                <div class="form-floating">
                    <select class="form-select" style={{borderRadius:'7%'}} id="floatingAcademyYear" aria-label="Floating label select example">
                        <option selected>שנת לימודים</option>
                        <option value="1">א'</option>
                        <option value="2">ב'</option>
                        <option value="3">ג'</option>
                        <option value="4">ד'</option>
                    </select>
                    <label for="floatingAcademyYear"></label>
                    <br />
                    <select style={{borderRadius:'7%'}} class="form-select" id="floatingAcademyFaculty" aria-label="Floating label select example">
                        <option selected>פקולטה</option>
                        <option value="1">הנדסה</option>
                        <option value="2">כלכלה ומנע"ס</option>
                        <option value="3">מדעי הרוח</option>
                        <option value="4">מדעי החברה</option>
                    </select>
                    <label for="floatingAcademyFaculty"></label>
                    <br />
                </div>
            </div>
        )
    }

    return (<div>
        <h1 style={{ textAlign: 'center' }}>הרשמה לאתר</h1>
        <div style={{borderStyle:'groove', padding:'50px'}}>
            <form style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <table>
                    <tr>
                        <td><label for="floatingFirstName">שם פרטי: </label></td>
                        <td><input value={user.firstName} onChange={(e) => { setUser((prev) => ({ ...prev, firstName: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingFirstName" placeholder="שם פרטי" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingLastName"></label>שם משפחה:</td>
                        <td><input value={user.laststName} onChange={(e) => { setUser((prev) => ({ ...prev, laststName: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingLastName" placeholder="שם משפחה" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingDOB">תאריך לידה: </label></td>
                        <input style={{ marginLeft: '0px', marginTop: '15px', width: '165px', borderRadius:'7%' }} type="date" class="form-control" id="floatingDOB" />
                    </tr>
                    <tr>
                        <td><label for="floatingEmail">אימייל:</label></td>
                        <td><input value={user.email} onChange={(e) => { setUser((prev) => ({ ...prev, email: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="email" class="form-control" id="floatingEmail" placeholder="אימייל" /></td>
                    </tr>
                    <tr>
                        <td><label for="floatingPassword"></label>הזן סיסמא:</td>
                        <td><input value={user.password} onChange={(e) => { setUser((prev) => ({ ...prev, password: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="password" class="form-control" id="floatingPassword" placeholder="בחר סיסמא" /></td>
                    </tr>
                    {/* <div class="form-floating">
                <label for="floatingPasswordVerify"></label>
                <input style={{marginTop:'15px'}} type="password" class="form-control" id="floatingPasswordVerify" placeholder="הזן סיסמא בשנית"/>
            </div> */}
                    <tr>
                        <td><label for="floatingPhone"></label>טלפון:</td>
                        <td><input value={user.phone} onChange={(e) => { setUser((prev) => ({ ...prev, phone: e.target.value })) }} style={{ marginTop: '15px', borderRadius:'7%' }} type="text" class="form-control" id="floatingPhone" placeholder="טלפון" /></td>
                    </tr>
                    {/* <select class="form-select" id="floatingPrefix" aria-label="Floating label select example">
                    <option selected>קידומת</option>
                    <option value="1">051</option>
                    <option value="2">052</option>
                    <option value="3">053</option>
                    <option value="4">054</option>
                    <option value="5">055</option>
                    <option value="6">057</option>
                    <option value="7">058</option>
                    <option value="8">02</option>
                    <option value="9">03</option>
                    <option value="10">04</option>
                    <option value="11">08</option>
                </select> */}
                    {/* <div class="form-floating" style={{marginTop:'15px'}}>
                <select class="form-select" id="floatingGender" aria-label="Floating label select example">
                    <option selected>מין</option>
                    <option value="1">זכר</option>
                    <option value="2">נקבה</option>
                    <option value="3">לא רוצה לציין</option>
                </select>
                <label for="floatingGender"></label>
            </div> */}
                </table>
                <br />
                <div class="form-floating" style={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                    <h4>הזן פרטי לימודים:</h4>
                    <select onChange={(e) => { setSchool(e.target.value) }} style={{borderRadius:'7%'}} class="form-select" id="floatingStudentType" aria-label="Floating label select example">
                        <option value="1">המרכז האקדמי</option>
                        <option value="2">ביה"ס להנדסאים</option>
                    </select>
                    <label for="floatingStudentType"></label>
                </div>
                {school === `1` ? ShowAcademyOption() : ShowEngineerOption()}
                <button onClick={registerBtnClick} style={{ width: '100px', marginTop: '30px' }}>הרשמה</button>
            </form>
        </div>
    </div >
    )
}

