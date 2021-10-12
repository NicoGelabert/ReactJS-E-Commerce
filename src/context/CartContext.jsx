import { createContext, useState, useContext } from 'react'
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cart, setCart] = useState([]);
    const [cantItems, setcantItems] = useState(0);

    function isInCart(id){
        return cart.find(element => element.item.id === id)
    }

    function addItem(item, qty){
        if(isInCart(item.id)){
            const updateCart = [...cart];
            updateCart.forEach((element)=>{
                if(element.item.id === item.id){
                    element.qty = element.qty + qty;
                }
            })
            setCart(updateCart)
        }else{
            setCart([ ...cart, {item, qty} ])
            setcantItems(cantItems + qty);
        }
    }

    function removeItem(item, qty) {
        setCart(cart.filter(obj => obj.item.id !== item));
        setcantItems(cantItems - qty);
    }

    function clearCart(){
        setCart([])
        setcantItems(0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, cantItems, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider