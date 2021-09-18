import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cantItems} = useCartContext()
    return (
        <div>
            <NavLink to="/cart" className="nav-link text-white">
                {cantItems !== 0 &&
                <span className="position-absolute start-65-15 translate-middle badge rounded-pill widget-carrito">{cantItems}</span>
                }
                <i className="bi-basket" role="img" width="24" height="24" aria-label="Carrito"></i>
                <p>Carrito</p>
            </NavLink>
        </div>
    )
}

export default CartWidget
