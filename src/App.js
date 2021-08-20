import React from 'react';
import ItemListContainer from './components/body/ItemListContainer';
import NavBar from './components/navbar/NavBar';

const greeting = () => {
  return React.createElement('h1', null, 'Bienvenido a Tornado E-Commerce');

}

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting}/>
    </>
  );
}

export default App;
