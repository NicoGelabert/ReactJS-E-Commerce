import React from 'react'

const CartWidget = () => {
    return (
        <div>
            <a href="/" className="nav-link text-white">
                <span className="position-absolute start-65-15 translate-middle badge rounded-pill widget-carrito">5</span>
                <i className="bi-basket" role="img" width="24" height="24" aria-label="Carrito"></i><br/>
                Carrito
            </a>
        </div>
    )
}

export default CartWidget
