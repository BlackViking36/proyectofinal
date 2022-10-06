import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav>
            <h1> TITULO DEL ECOMMERCE </h1> 
            <Link to={`/category/celular`}> celular </Link>
            <Link to={`/category/tablet`}> tablets </Link>
            <Link to={`/category/accesorios`}> accesorios </Link>
        </nav>
        // <CartWidget />
    )
}
