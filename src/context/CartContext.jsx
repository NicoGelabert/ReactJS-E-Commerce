import { createContext, useState, useContext } from 'react'
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    function isInCart(id){
        return cart.find(element => element.item.id === id)
    }

    function addItem(item, qty){
        if(isInCart(item.id)){
            const updateCart = [...cart];
            updateCart.forEach((element)=>{
                if(element.item.id === item.id){
                    element.qty = element.qty + qty
                }
            })
            setCart(updateCart)
        }else{
        setCart([...cart, {item, qty}])
        }
    }
    console.log(cart)

    function clearCart(){
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

// export const CartContextProvider = ({children}) => {

//     

//     const removeItem = (itemId) =>{
//         const cartFilter = cart.filter(element => element.item.id !== itemId)
//         return setCart(cartFilter) 
//     }

//     const clearCart = () => setCart([])

//     return(
//         <CartContext.Provider value={{addItem, isInCart, clearCart, removeItem, cart}}>
//             {children}
//         </CartContext.Provider>
//     )
// }
