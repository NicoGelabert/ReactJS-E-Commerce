import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({product}) => {
    return (
        <div className="card product row margin">
            <img src={product.pictureUrl} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <h5>$ {product.price}</h5>
                <a href="/" className="btn btn-productos"><FontAwesomeIcon icon={faEye} /></a>
            </div>
        </div>
    )
}

export default ItemDetail
