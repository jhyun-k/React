import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";
import { useSelector } from 'react-redux/es/exports';

const Nav = () => {

    const cart = useSelector(state=>state.cart)
    return (
        <nav className="nav">
            <span className="nav-title"><Link to='/'>SHOP</Link></span>
            <span>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart">
                        <div className="cart-amount">{cart.length}</div> {/* 개수 구하는거라 length */}
                    </i>
                </Link>
            </span>
        </nav>
    );
};

export default Nav;