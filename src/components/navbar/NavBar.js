import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <header>
            <div className="px-3 py-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <i className="bi-tornado" role="img" width="32" height="32" aria-label="E-commerce" id="brand"></i><span className="fs-4 brandName">Tornado E-Commerce</span>
                        </a>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                            <a href="/" className="nav-link text-white">
                            <i className="bi-house-door" role="img" width="24" height="24" aria-label="Home"></i><br/>
                                Home
                            </a>
                            </li>
                            <li>
                            <a href="/" className="nav-link text-white">
                            <i className="bi-list-check" role="img" width="24" height="24" aria-label="Products"></i><br/>
                                Categorías
                            </a>
                            </li>
                            <li>
                            <a href="/" className="nav-link text-white">
                            <i className="bi-basket" role="img" width="24" height="24" aria-label="Carrito"></i><br/>
                                Carrito
                            </a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </header>
    )
}

export default NavBar
