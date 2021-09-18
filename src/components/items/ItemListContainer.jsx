import React, { useState, useEffect} from 'react';
import Greeting from '../greetings/Greeting';
import ItemList from './ItemList';
import { promiseList } from '../utils/promises';
import './body.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => { 
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        
        if(category===undefined){
            promiseList.then(
                (x)=> {setProducts(x)
                setLoading(false)})
                .catch( (err)=> {console.log(err.message)} )
        }else{
            promiseList.then(
                (x)=>{setProducts(x.filter(y => category === y.category))
                setLoading(false)}
            )
        }
    }, [category])

    return (
        <div className="px-4 my-5 text-center">
            <Greeting />
            <ItemList products={products} loading={loading}  />
        </div>
    )
}

export default ItemListContainer
