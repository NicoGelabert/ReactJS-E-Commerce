import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './alerts.css'

const Success = ({ count }) => {
    return (
        <div>
            <NavLink to="/cart">
                <button className="btn btn-carrito btn-lg px-4 gap-3 btn-endshop">ir al carrito</button>
            </NavLink>
            <NavLink to="/">
                <button className="btn btn-productos btn-lg px-4 mx-3 gap-3 btn-endshop">Seguir comprando</button>
            </NavLink>
            
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
