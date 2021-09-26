import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './cart.css'
import { NavLink } from 'react-router-dom';
import ListCartItems from './ListCartItems';

const Cart = () => {
    
    const { cart } = useCartContext()
    
    return (
        <>{cart.length === 0 &&
        <div className="row cart">
            <img src="https://i.gifer.com/XSNt.gif" alt="No hay nada en tu carrito"/>
            <h3>No hay nada en tu carrito</h3>
            <NavLink to="/"><button type="button" className="btn btn-productos btn-lg px-4 gap-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Ver productos</button></NavLink>
        </div>
        }
        {cart.length > 0 && 
        <div className="container">
            
                <ListCartItems/>
                <NavLink to="/checkout">
                    <button className="btn">completar compra</button>
                </NavLink>
                
        </div>
        }
        </>
    )
}

export default Cart