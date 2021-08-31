import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import './body.css';

const ItemCount = ({ initial, stock }) => {
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
        <div className="row countrow">
            <h3>Contador</h3>
            <div className="d-grid gap-2 d-md-block itemcount col-lg-2">
                <button onClick={handleClick(false)} className="btn btn-productos" type="button"><FontAwesomeIcon icon={faMinus} /></button>
                    <h4>{ count }</h4>
                <button onClick={handleClick(true)} className="btn btn-productos" type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <p>Stock disponible: { stock }</p>
        </div>
    )
}

export default ItemCount
