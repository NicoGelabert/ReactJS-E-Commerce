import React from 'react'
import './cart.css'

const Cart = () => {
    //const {isInCart, clearCart, removeItem, cart} = useContext(CartContext)
    return (
        <div className="row cart">
            <img src="https://i.gifer.com/XSNt.gif" alt="No hay nada en tu carrito"/>
            <h3>No hay nada en tu carrito</h3>
        </div>
    )
}

export default Cart
