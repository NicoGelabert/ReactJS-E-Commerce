import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './alerts.css'
import { useCartContext } from '../../context/CartContext';

const Success = ({ count }) => {
    const {clearCart} = useCartContext()
    return (
        <div>
            <NavLink to="/cart">
                <button className="btn btn-carrito btn-lg px-4 gap-3 btn-endshop">Finalizar compra</button>
            </NavLink>
            <button className="btn btn-carrito btn-lg px-4 gap-3 btn-endshop" onClick={clearCart}>Clear Cart</button>
            <div class="alert alert-success d-flex align-items-center" role="alert">
                    <FontAwesomeIcon icon={faCheckCircle} />
                <div>
                    <p>Añadiste {count} ítem/s al carrito</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Success
