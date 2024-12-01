import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-3 col-12 mb-3">
                    <a href="#">
                        <img src="images/logo.png" alt="Logo de VitKat" width="150" height="150" />
                    </a>
                </div>
                <div className="col-md-3 col-12 mb-3">
                    <h4 style={{ color: '#ffc107' }}>Ajuda</h4>
                    <p><a href="#" className="text-white">Preguntes freqüents</a></p>
                    <p><a href="#" className="text-white">Condicions de compra</a></p>
                    <p><a href="#" className="text-white">Política de privadesa</a></p>
                    <p><a href="#" className="text-white">Canal de denúncies</a></p>
                    <p><a href="#" className="text-white">Avís legal</a></p>
                </div>
                <div className="col-md-3 col-12 mb-3">
                    <h4 style={{ color: '#ffc107' }}>Contacte</h4>
                    <p>Formulari de contacte</p>
                    <p>Whatsapp - 684541447</p>
                    <p>Telèfon - 938748710</p>
                </div>
                <div className="col-md-3 col-12 mb-3">
                    <h4 style={{ color: '#ffc107' }}>Segueix-nos</h4>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white me-3">
                        <i className="fab fa-facebook fa-lg"></i>
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noreferrer" className="text-white me-3">
                        <i className="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white me-3">
                        <i className="fab fa-instagram fa-lg"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-white">
                        <i className="fab fa-youtube fa-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

