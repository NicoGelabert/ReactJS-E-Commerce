import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Item = ({name, pictureUrl, description, price}) => {
    return (
        <div class="card product row">
            <img src={pictureUrl} class="card-img-top" alt={name} />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">{description}</p>
                <h5>$ {price}</h5>
                <a href="/" class="btn btn-productos"><FontAwesomeIcon icon={faEye} /></a>
            </div>
        </div>
    )
}

export default Item
