import React from 'react';
import Header from './Header';
import LlistaProductes from './LlistaProductes';
import MenuPrincipal from './MenuPrincipal';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MenuPrincipal />
      <div className="container" style={{ marginTop: '180px', marginBottom: '50px' }}>

        <LlistaProductes />
      </div>
      <Footer />
    </div>
  );
}

export default App;