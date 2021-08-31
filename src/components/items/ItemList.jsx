import React, { useEffect, useState } from 'react'
import Item from './Item';
import { promiseList } from '../utils/promises';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        promiseList.then( (x)=> setProducts(x) ).catch( (err)=> {console.log(err.message)} )
    }, [])
    
    return (
        <div className="row products">
                { products.map( (product) => { 
                return(
                    <Item key={product.id} name={product.name} pictureUrl={product.pictureUrl} description={product.description} price={product.price} />
                    )
                }) 
                }
        </div>
    )
}

export default ItemList
