import React, { useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getFirestore } from '../utils/getFirebase';
//import { animals } from '../utils/promises';
import CartWidget from './CartWidget';
import './navbar.css';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        const db = getFirestore();
        db.collection('categorias')
        .get()
        .then(querySnapshot => {
            if(querySnapshot.size !== 0){
                setCategories(querySnapshot.docs.map(cat => ({id: cat.id, ...cat.data()})))
            }
        })
        .catch(err => console.log(err))
        .finally();
        },[category])

    // useEffect(()=>{
    //     const cat = [];
    //     animals.forEach(c => {
    //         if (!cat.find(obj => obj === c.category)) {
    //             cat.push(c.category);
    //         }
    //     });
        
    //     setCategories(cat)
    // },[category])

    console.log(categories)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
            <div className="container-fluid">
                <NavLink to='/' className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <i className="bi-tornado" role="img" width="32" height="32" aria-label="E-commerce" id="brand"></i><span className="fs-4 brandName">Tornado E-Commerce</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <i className="bi-tornado" role="img" width="32" height="32" aria-label="E-commerce" id="brand"></i><h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Tornado E-Commerce</h5>
                    <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link text-white">
                        <i className="bi-house-door" role="img" width="24" height="24" aria-label="Home"></i>
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink to='/' className="nav-link dropdown-toggle text-white" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-list-check" role="img" width="24" height="24" aria-label="Products"></i><br/>
                            Categorías
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                            {
                                categories.map((category) => { 
                                    return(
                                        <li>
                                            <NavLink to={`/categoria/${category.slug}`} className="dropdown-item">{category.name}</NavLink>
                                        </li>
                                        )
                                    }) 
                            }
                        </ul>
                    </li>
                    <li className="nav-item">
                        <CartWidget />
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
