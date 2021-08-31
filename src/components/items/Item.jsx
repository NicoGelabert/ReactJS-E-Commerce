import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Item = ({name, pictureUrl, description, price}) => {
    return (
        <div className="card product row">
            <img src={pictureUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{description}</p>
                <h5>$ {price}</h5>
                <a href="/" className="btn btn-productos"><FontAwesomeIcon icon={faEye} /></a>
            </div>
        </div>
    )
}

export default Item
