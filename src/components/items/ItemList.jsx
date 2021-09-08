import Loader from '../loader/Loader';
import Item from './Item';

const ItemList = ({products, loading}) => {
    
    return (
        <div className="row products">
            {loading
            ?
            <Loader/>
            :
            products.map( (product) => { 
                return(
                    <Item key={product.id} product={product}/>
                    )
                }) 
                }
        </div>
    )
}

export default ItemList
