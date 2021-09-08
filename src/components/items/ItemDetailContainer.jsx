import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './body.css';
import { animals, getAnimal, cat } from '../utils/promises';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [animalDetail, setAnimalDetail] = useState()
    const [categories, setCategories] = useState([]);
    const {id} = useParams()
    
    useEffect(()=>{
        const animalId = animals.find(animal => animal.id === id)

        getAnimal(animalId).then(result => setAnimalDetail(result)).then(loading => setLoading(false)).catch(error => console.log(error.message))

        setCategories(cat)

    }, [id])

    return (
        <div className="container px-4 my-5 text-center">
            {
            loading
            ?
            <Loader/>
            :
            <ItemDetail animalDetail={animalDetail} categories={categories} />
            }
        </div>
    )
}

export default ItemDetailContainer
