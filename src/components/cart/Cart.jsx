import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './cart.css'
import { NavLink } from 'react-router-dom';

const Cart = () => {
    
    const {clearCart, cart, removeItem} = useCartContext()
    let total = 0;
    
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
            
                <table class="table table-striped table-hover cartlistcontainer">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total por unidad</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map(element =>
                        <tr>
                        <th scope="row"><button className="btn-trash" onClick={() => removeItem(element.item.id, element.qty)}><FontAwesomeIcon icon={faTrashAlt} /></button></th>
                        <td><img src={element.item.pictureUrl} alt={element.item.name} /></td>
                        <td>{element.item.name}</td>
                        <td>{element.qty}</td>
                        <td>{element.item.price}</td>
                        <td>{element.item.price*element.qty}</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><div className="d-print-none">{cart.map(element => {
                                return total = element.item.price * element.qty + total} )}</div></th>
                            <th scope="col">$ {total}</th>
                        </tr>                        
                    </tfoot>
                </table>
                <div>
                <button type="button" onClick={clearCart} className="btn btn-carrito btn-lg px-4 gap-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Borrar productos</button>
                </div>
        </div>
        }
        </>
    )
}

export default Cart
