import React from 'react';
import './body.css';

const ItemListContainer = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
            <i className="bi-tornado d-block mx-auto mb-4" role="img" aria-label="E-commerce" id="hero-brand"></i>
            <h1 class="display-5 fw-bold">Bienvenidos a Tornado E-Commerce</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Una plataforma pensada para maximizar tu experiencia en la compra de artículos de todo tipo. Comenzá tu recorrido y llevate todo.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-productos btn-lg px-4 gap-3">Ver productos</button>
                <button type="button" class="btn btn-carrito btn-lg px-4">Ir al carrito</button>
            </div>
            </div>
        </div>
    )
}

export default ItemListContainer
