import React, { useEffect, useState } from 'react'
import Item from './Item';

const productsArray = [
    {id: 1, name: 'Producto 1', description: 'Nulla consequat massa quis enim. Donec pede justo.', price: 100, pictureUrl: 'https://images.pexels.com/photos/1683724/pexels-photo-1683724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 2, name: 'Producto 2', description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.', price: 110, pictureUrl: 'https://images.pexels.com/photos/105804/pexels-photo-105804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 3, name: 'Producto 3', description: 'Aenean commodo ligula eget dolor. Aenean massa.', price: 140, pictureUrl: 'https://images.pexels.com/photos/551625/pexels-photo-551625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 4, name: 'Producto 4', description: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis.', price: 190, pictureUrl: 'https://images.pexels.com/photos/1551440/pexels-photo-1551440.png?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 5, name: 'Producto 5', description: 'Nulla consequat massa quis enim. Donec pede justo.', price: 150, pictureUrl: 'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 6, name: 'Producto 6', description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae.', price: 180, pictureUrl: 'https://images.pexels.com/photos/7243633/pexels-photo-7243633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 7, name: 'Producto 7', description: 'Vivamus elementum semper nisi. Aenean vulputate.', price: 120, pictureUrl: 'https://images.pexels.com/photos/5468588/pexels-photo-5468588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 8, name: 'Producto 8', description: 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac.', price: 170, pictureUrl: 'https://images.pexels.com/photos/7713938/pexels-photo-7713938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
];

// function getProductos(id) {
//     if (id===undefined) {
//         return productsArray
//     }else{
//         return productsArray.find( productArray=> productArray.id === id )
//     }
// }

let tarea = new Promise( (resolve)=>{
    setTimeout(()=>{resolve(productsArray)}, 3000);
} );

const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        tarea.then( (x)=> setProducts(x) ).catch( (err)=> {console.log(err.message)} )
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
