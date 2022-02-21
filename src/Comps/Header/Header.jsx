import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5px,5px' }}>

      <span class="material-icons">

      </span>
      <div style={{ color: "pink", margin: '10px' }}>
        <img src="" alt="" srcset="" />
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        <span>
          <Link to="/">דף הבית</Link>
        </span>
        <span style={{marginRight:'30px'}}>
          <Link to="/login">כניסה</Link>
        </span>
        <span style={{marginRight:'30px'}}>
          <Link to="/register">הרשמה</Link>
        </span>
      </div>
    </div>
  );
}
