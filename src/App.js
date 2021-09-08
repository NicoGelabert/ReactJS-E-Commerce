import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import Cart from './components/cart/Cart';
import {CartContext} from './context/CartContext'

function App() {
  return (
    <CartContext.Provider value={[]}>
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ItemListContainer}/>
        <Route exact path='/categoria/:category' component={ItemListContainer}/>
        <Route exact path='/animales/:id' component={ItemDetailContainer}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </Router>
    </>
    </CartContext.Provider>
  );
}

export default App;
