import React, { useState, useEffect} from 'react';
import Greeting from '../greetings/Greeting';
import ItemList from './ItemList';
//import { promiseList } from '../utils/promises';
import './body.css';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../utils/getFirebase';
import Loader from '../loader/Loader';

const ItemListContainer = () => { 
    const [products, setProducts] = useState([]);
    const {slug} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('items')
        const collectionQuery = slug ? itemCollection.where('slug', '==', slug) : itemCollection;

        collectionQuery
        .get()
        .then((querySnapshot) => {
            setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        })
        .catch(err => console.log(err))
        .finally(() => {setLoading(false)});
        },
        [slug]);

    // useEffect(() => {
    //     if(category===undefined){
    //         promiseList.then(
    //             (x)=> {setProducts(x)
    //             setLoading(false)})
    //             .catch( (err)=> {console.log(err.message)} )
    //     }else{
    //         promiseList.then(
    //             (x)=>{setProducts(x.filter(y => category === y.category))
    //             setLoading(false)}
    //         )
    //     }
    // }, [category])

    return (
        <div className="px-4 my-5 text-center">
            <Greeting />
            {
            loading
            ?
            <Loader/>
            :
            <ItemList products={products}/>
            }            
        </div>
    )
}

export default ItemListContainer
