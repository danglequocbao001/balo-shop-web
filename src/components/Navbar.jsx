/* eslint-disable jsx-a11y/anchor-is-valid */
import { faCartShopping, faRegistered, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const state= useSelector((state)=>state.HandleCart)
    console.log(state);
    localStorage.setItem("test",JSON.stringify(state))
    const cartCount= JSON.parse(localStorage.getItem("test"));
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">ABC.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                        
                        <div className="buttons">
                                <NavLink to="/login" className="btn btn-outline-dark">Login
                                    <FontAwesomeIcon className='ms-2' icon={faRightFromBracket}/>
                                </NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark mx-3">Register
                                    <FontAwesomeIcon className='ms-2' icon={faRegistered}/>
                                </NavLink>
                                <NavLink to="/cart" className="btn btn-outline-dark">Cart ({cartCount.length})
                                    <FontAwesomeIcon className='ms-2' icon={faCartShopping}/>
                                </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
