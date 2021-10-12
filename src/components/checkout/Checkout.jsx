import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import CartForm from '../cart/CartForm'
import { getFirestore } from '../utils/getFirebase'
import firebase from 'firebase'
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    const [orderData, setOrderData] = useState({})
    const { clearCart, cart } = useCartContext()
    const [cartOrder, setCartOrder] = useState([])
    
    const total = 0;
    let totalShop = 0;

    const [formData, setFormData] = useState(initialState)
    const inputs = [
        {type:"text", id:"name", name:"name", placeholder:"ingrese su nombre", value: formData.name, label: "Nombre"},
        {type:"text", id:"lastname", name:"lastname", placeholder:"ingrese su apellido", value: formData.lastname, label: "Apellido"},
        {type:"text", id:"phone", name:"phone", placeholder:"ingrese su telefono", value: formData.phone, label: "Número de teléfono"},
        {type:"email", id: "email", name:"email", placeholder:"ingrese su email", value: formData.email, label: "Email"},
        {type:"email", id:"emailconfirmation", name:"emailconfirmation", placeholder:"reingrese su email", label: "Confirmá tu email"}
    ]
    
    function handleSubmit(e){
        e.preventDefault();
        if (document.getElementById("email").value === document.getElementById("emailconfirmation").value && document.getElementById("name").value !== "" && document.getElementById("lastname").value !== "" && document.getElementById("phone").value !== "") { 
            const newOrder = {
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                buyer: formData,
                item: cart,
                total: total,
            }
            const db = getFirestore();
            const orderCollection = db.collection('order');
            orderCollection
            .add(newOrder)
            .then(resp => setOrderData(resp))
            .catch(err => console.log(err))
            .finally(
                setFormData(initialState),
                setCartOrder(cart),
                clearCart(),
            )
        }else{
            alert('Por favor revise los datos')
        }
    }

    return (
        <div>
            {cart.length > 0 &&
                <CartForm
                formData={formData}
                setFormData={setFormData}
                initialState={initialState}
                total={total}
                inputs={inputs}
                handleSubmit={handleSubmit}
                />
            }
            {cart.length === 0 &&
                <div className="cartlistcontainer">
                     
                    <div>
                        <h1>Gracias por tu compra.</h1>
                        <h2>Tu número de orden es:</h2>
                        <h3>{orderData.id}</h3>
                        <h4 className="mt-5">Resumen de compra</h4>
                        {cartOrder.map((element) =>{
                            return(
                                <div className="centrar mt-3">
                                    <div><p>{element.qty}</p></div>
                                    <div className="mx-3"><p>{element.item.name}</p></div>
                                    <div><p>{element.item.price}</p></div>                                
                                </div>
                        )})}<div className="d-print-none">{cartOrder.map(element => {
                            return totalShop = element.item.price * element.qty + totalShop} )}</div>
                            <h3 className="mt-3">Total: ${totalShop}</h3>
                            <div className="mt-5">
                            <NavLink to="/">
                            <button type="button" className="btn btn-productos btn-lg px-4 gap-3 centrar" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">volver al inicio</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Checkout

const initialState = {
    name: '',
    lastname: '',
    phone: '',
    emai:''
}