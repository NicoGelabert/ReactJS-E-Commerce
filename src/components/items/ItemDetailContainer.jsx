import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './body.css';
import { promiseDetail } from '../utils/promises'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    useEffect(()=>{
        promiseDetail.then((x)=>{setProduct(x)}).catch((err)=>{console.log(err.message)})
    }, [])
    return (
        <div className="px-4 py-5 my-5 text-center">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
