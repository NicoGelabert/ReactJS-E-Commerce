import React from 'react';
import ItemListContainer from './components/body/ItemListContainer';
import NavBar from './components/navbar/NavBar';

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
    </>
  );
}

export default App;
