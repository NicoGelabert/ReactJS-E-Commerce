import React from 'react';
import ItemCount from './ItemCount';
import './body.css';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    const initial = 1;
    const stock = 5;
    return (
        <div className="px-4 py-5 my-5 text-center">
            <i className="bi-tornado d-block mx-auto mb-4" role="img" aria-label="E-commerce" id="hero-brand"></i>
            <div>{greeting()}</div>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Una plataforma pensada para maximizar tu experiencia en la compra de artículos de todo tipo. Comenzá tu recorrido y llevate todo.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-productos btn-lg px-4 gap-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Ver productos</button>
                <button type="button" className="btn btn-carrito btn-lg px-4">Ir al carrito</button>
            </div>
            </div>
            <ItemCount initial={ initial } stock={ stock }/>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
