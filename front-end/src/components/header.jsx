import logo from '../assets/Untitled.png';
import { useState } from 'react';
import LoginForm from './loginform';


function Header() { 

    const [showLogin, setShowLogin] = useState(false);

    function handleLoginClick() { 
        setShowLogin(true);
    }

    return (
        <>
        <nav className="header"> 
            <div className='left_nav'>
                <img src={logo} alt="STI Logo" className="logo_image" />
                <h1 className="brand"> 
                    STI Education Services Group
                </h1>    
            </div>

            <div className='right_nav'>
            <ul className='nav-links'>
                <li><a href="" className="header_text">Campus Helpdesk</a></li>
                <li><a href="" className="header_text">FAQ</a></li>
            </ul>
            <button className='login-button' onClick={handleLoginClick}>Log in</button>

            {
                showLogin && <LoginForm />
            }
            </div>
        </nav>
        </>
    )
}

export default Header;