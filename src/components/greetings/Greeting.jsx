import React from 'react';
import { NavLink } from 'react-router-dom';
import './greeting.css';

const greeting = () => {
    return (
        <div>
            <i className="bi-tornado d-block mx-auto mb-4" role="img" aria-label="E-commerce" id="hero-brand"></i>
            <h1 className="greeting">Bienvenido a Tornado E-Commerce</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Una plataforma pensada para maximizar tu experiencia en la compra de artículos de todo tipo. Comenzá tu recorrido y llevate todo.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <NavLink to="/"><button type="button" className="btn btn-productos btn-lg px-4 gap-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Ver productos</button></NavLink>
                <NavLink to="/cart"><button type="button" className="btn btn-carrito btn-lg px-4">Ir al carrito</button></NavLink>
            </div>
            </div>
        </div>
    )
}

export default greeting