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
          <Link to="/" style={{color:'black'}}>דף הבית</Link>
        </span>
        <span style={{marginRight:'50px'}}>
          <Link to="/login" style={{color:'black'}}>כניסה</Link>
        </span>
        <span style={{marginRight:'50px'}}>
          <Link to="/register" style={{color:'black'}}>הרשמה</Link>
        </span>
      </div>
    </div>
  );
}
