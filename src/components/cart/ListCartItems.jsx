import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ListCartItems = () => {
    const {clearCart, cart, removeItem} = useCartContext()
    let total = 0
    return (
        <div>
            <table class="table table-striped table-hover cartlistcontainer">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total por unidad</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map(element =>
                        <tr>
                        <td><img src={element.item.pictureUrl} alt={element.item.name} /></td>
                        <td>{element.item.name}</td>
                        <td>{element.qty}</td>
                        <td>{element.item.price}</td>
                        <td>{element.item.price*element.qty}</td>
                        <td><button className="btn-trash" onClick={() => removeItem(element.item.id, element.qty)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><div className="d-print-none">{cart.map(element => {
                                return total = element.item.price * element.qty + total} )}</div></th>
                            <th scope="col">Total</th>
                            <th scope="col">$ {total}</th>
                            <th scope="col"></th>
                        </tr>                        
                    </tfoot>
                </table>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <button type="button" onClick={clearCart} className="btn btn-carrito btn-lg px-4 gap-3 centrar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Borrar productos</button>
                    </div>
                    <div>
                        <NavLink to="/">
                        <button type="button" className="btn btn-productos btn-lg px-4 gap-3 centrar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">seguir comprando</button>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default ListCartItems
