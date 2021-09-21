import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './body.css';
//import { animals, getAnimal, cat } from '../utils/promises';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../utils/getFirebase';

const ItemDetailContainer = ({item}) => {
    const [loading, setLoading] = useState(true)
    const [animalDetail, setAnimalDetail] = useState({})
    const [categories, setCategories] = useState([]);
    const {id} = useParams()
    const {addItem} = useCartContext()
    const [clicked, setClicked] = useState(false);
    
    const onAdd = (qty)=>{
        return ()=>{
            addItem(animalDetail, qty);
            setClicked(true)
        }
    }

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection
        .doc(id)
        .get()
        .then((doc) =>{
            setAnimalDetail({ id: doc.id, ...doc.data() })
            setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(() => {setLoading(false)});
    }, [id])

    useEffect(() => {
        const db = getFirestore();
        db.collection('categorias')
        .get()
        .then(querySnapshot => {
            if(querySnapshot.size !== 0){
                setCategories(querySnapshot.docs.map(cat => ({id:cat.id, ...cat.data()})))
                setLoading(false);
            }
        })
        .catch(err => console.log(err))
        .finally(() => {setLoading(false)});
        },[categories])
        
        console.log(categories)
    
    // useEffect(()=>{
    //     const animalId = animals.find(animal => animal.id === id)

    //     getAnimal(animalId).then(result => setAnimalDetail(result)).then(loading => setLoading(false)).catch(error => console.log(error.message))

    //     setCategories(cat)

    // }, [id])

    return (
        <div className="container px-4 my-5 text-center">
            {
            loading
            ?
            <Loader/>
            :
            <ItemDetail animalDetail={animalDetail} 
            categories={categories}
            onAdd={onAdd} clicked={clicked} />
            }
        </div>
    )
}

export default ItemDetailContainer
