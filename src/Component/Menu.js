import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
            <NavLink exact to="/"> Home </NavLink>  |
            <NavLink exact to="/about"> About  </NavLink>  |
            <NavLink exact to="/contact"> Contact  </NavLink> |
            <NavLink exact to="/card"> Card </NavLink> |
            <NavLink exact to="/info"> Info </NavLink> | 
            <NavLink exact to="/product"> Product </NavLink> |
            <NavLink exact to="/register"> Register </NavLink> |
            <NavLink exact to="/user"> User </NavLink> 
        </>
    );
}
 
export default Menu;

// npm i react-router-dom 