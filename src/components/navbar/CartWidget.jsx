import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div>
            <NavLink to="/cart" className="nav-link text-white">
                <span className="position-absolute start-65-15 translate-middle badge rounded-pill widget-carrito">5</span>
                <i className="bi-basket" role="img" width="24" height="24" aria-label="Carrito"></i>
                <p>Carrito</p>
            </NavLink>
        </div>
    )
}

export default CartWidget
