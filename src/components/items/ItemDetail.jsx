import React from 'react'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom';
import Success from '../alerts/Success';
const ItemDetail = ({animalDetail, initial, categories, onAdd, clicked}) => {
    return (
        <div className="card mb-3 productDetail margin container mb-3">
            <div className="row g-0">
                <div className="col-md-3 col-lg-2 card-body">
                    <h5>CATEGORÍAS</h5>
                    <ul className="productDetail productList">
                        {
                            categories.map((category) => { 
                                return(
                                    <li key={category.name} className="productList">
                                        <NavLink to={`/categoria/${category}`} >{category}</NavLink>
                                    </li>
                                    )
                                }) 
                        }
                    </ul>
                </div>
                <div className="col-md-4 col-lg-5 padding-side">
                <img src={animalDetail.pictureUrl} className="img-fluid rounded-start" alt={animalDetail.name}/>
                </div>
                <div className="col-md-5 col-lg-5">
                <div className="card-body">
                    <h4 className="card-title">{animalDetail.name}</h4>
                    <p className="card-text">{animalDetail.description}</p>
                    <h3>$ {animalDetail.price}</h3>
                    <div className="row countrow">
                        {
                        !clicked
                        ?
                        <ItemCount initial={ initial } stock={ animalDetail.stock } onAdd={ onAdd } clicked={ clicked }/>
                        :
                        <Success />
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
