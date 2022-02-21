import React from 'react';
import Footer from '../Comps/Footer/Footer';
import Header from '../Comps/Header/Header';
import Main_Routes from '../Routes/Main_Routes';

export default function Main_Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <Header />
      </div>
      <main>
        <Main_Routes />
        </main>
    </div>
  );
}
