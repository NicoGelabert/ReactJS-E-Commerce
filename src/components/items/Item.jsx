import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <div className="card product row margin">
            <img src={product.pictureUrl} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <NavLink to={`/categoria/${product.category}`}><span>{product.category}</span></NavLink>
                <p className="card-text">{product.description}</p>
                <h5>$ {product.price}</h5>
                <NavLink to={`/animales/${product.id}`} className="btn btn-productos"><FontAwesomeIcon icon={faEye} /></NavLink>
            </div>
        </div>
    )
}

export default Item
