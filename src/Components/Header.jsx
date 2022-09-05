import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import { FaCartPlus } from "react-icons/fa";


const Header = ({cartItems}) => {

    return ( 

        <header className='header'>
            
            <div>
                <h1>
                    <Link to="/" className="logo">
                        CarLoungerX
                    </Link>
                </h1>
            </div>

            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/sign-up">Sign up</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className='cart'>
                            <FaCartPlus />
                        </Link>
                        <span className='cart-length'>
                            {cartItems.length ===0 ? "" : cartItems.length}
                        </span>
                    </li>
                </ul>
            </div>

        </header>

     );

}

export default Header;