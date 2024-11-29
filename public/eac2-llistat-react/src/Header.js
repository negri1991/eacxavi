import React from 'react';
 
function Header() {
  return (
    <header>
      <div className="row text-white align-items-center fixed-top" >
        <div className="col-4 col-sm-4 col-md-8">
          <a href="C:\Users\ASUS\Desktop\IOC\Assignaturas\M09 - Disseny d'interfícies web\UF2\EAC2\DAWM09_EAC2_Sanz_R\index_bootstrap.html">
            <img src="images/logoBlanco.png" className="img-fluid logo" alt="Logo de VitKat" style={{ maxWidth: '50px' }} />
          </a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
          <a href="iniciarSessio.html">
            <i className="fa-solid fa-user"></i> Iniciar sessió
          </a>
        </div>
        <div className="col-4 col-sm-4 col-md-2">
          <select name="idiomes">
            <option value="es">Español</option>
            <option value="ca">Català</option>
          </select>
        </div>
      </div>
    </header>
  );
}
 
export default Header;
