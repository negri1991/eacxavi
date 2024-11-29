import React from 'react';

function MenuPrincipal() {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-dark mt-5">
            <button type="button" className="navbar-toggler bg-light" data-bs-toggle="collapse" data-bs-target="#nav"
                aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link text-light font-weight-bold text-uppercase px-3" href="index_bootstrap.html">
                            <i className="fa-solid fa-house" style={{ paddingRight: '10px' }}></i>Inici
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold text-uppercase px-3" href="contacte.html">
                            <i className="fa-solid fa-address-book" style={{ paddingRight: '10px' }}></i>Contacte
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold text-uppercase px-3" href="registrat.html">
                            <i className="fa-solid fa-user" style={{ paddingRight: '10px' }}></i>Registrat
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light font-weight-bold text-uppercase px-3" href="#"
                            id="eac2Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            EAC2
                        </a>
                        <ul className="dropdown-menu bg-dark" aria-labelledby="eac2Dropdown">
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="imatges.html">
                                <i className="fa-regular fa-image" style={{ paddingRight: '10px' }}></i>Imatges
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="audio.html">
                                <i className="fa-solid fa-music" style={{ paddingRight: '10px' }}></i>Audio
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="video.html">
                                <i className="fa-solid fa-video" style={{ paddingRight: '10px' }}></i>Video
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="playlist.html">
                                <i className="fa-solid fa-video" style={{ paddingRight: '10px' }}></i>Playlist
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="transicions.html">
                                Transicions
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="animacions.html">
                                Animacions
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="grafica.html">
                                <i className="fa-solid fa-chart-simple" style={{ paddingRight: '10px' }}></i>Gràfica
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="galeria.html">
                                <i className="fa-regular fa-image" style={{ paddingRight: '10px' }}></i>Galeria
                            </a></li>
                            <li><a className="active nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="llistat.html">
                                Llistat
                            </a></li>
                            <li><a className="nav-link text-light font-weight-bold text-uppercase px-3 dropdown-item" href="contacte.html">
                                <i className="fa-solid fa-address-book" style={{ paddingRight: '10px' }}></i>Contacte
                            </a></li>
                        </ul>
                    </li>
                </ul>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Cerca" aria-label="Cerca" />
                        <button className="btn bg-light input-group-text" id="search-button" type="button" onClick={() => window.location.href='cercle.html'}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default MenuPrincipal;
