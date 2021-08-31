import React from 'react';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer';

//const greeting = () => {
//  return React.createElement('h1', null, 'Bienvenido a Tornado E-Commerce');
//}

//const greeting = React.createElement('h1', null, 'Bienvenido a Tornado E-Commerce');

const styleGreeting = {
  fontWeight: 'bold',
  fontStyle: 'italic',
}
function greeting() {
  return <div>
            <h1 style={styleGreeting}>Bienvenido a Tornado E-Commerce</h1>
        </div>;
}

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting}/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
