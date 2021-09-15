import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import './body.css';


const ItemCount = ({ item, stock, onAdd }) => {
    const initial = 1;
    const [count, setCount] = useState(initial)
    const handleClick = (number) => {
        return () => {
            if (number && count < stock) {
                setCount(count + 1);
            }
            else if (!number && count > initial) {
                setCount(count - 1);
            }
        }
    }
    return (
        <div>
            <div className="row">
                <div className="d-grid gap-2 d-md-block itemcount col-lg-4 col-md-6">
                    <button onClick={handleClick(false)} className="btncount btn-productos" type="button"><FontAwesomeIcon icon={faMinus} /></button>
                        <h5>{ count }</h5>
                    <button onClick={handleClick(true)} className="btncount btn-productos" type="button"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <div className="col-lg-8 col-md-6">
                    {
                        <button onClick={onAdd(count)} className="btn btn-productos btn-lg px-4 gap-3 margintop btn-endshop" >Añadir al carrito</button>
                    }
                </div>
            </div>
            <div className="mt-4">
                <p className="productDetailStock">Stock disponible: { stock }</p>
            </div>
        </div>
    )
}

export default ItemCount
