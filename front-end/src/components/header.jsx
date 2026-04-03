import logo from '../assets/train-logo.png';
import LoginForm from './loginform';


function Header() { 

    return (
        <>
        <nav className="header"> 
            <div className='left_nav'>
                <img src={logo} alt="Train Logo" className="logo_image" />
                <h1 className="brand"> 
                    
                </h1>    
            </div>

            <div className='right_nav'>
            <ul className='nav-links'>
                <li><a href="" className="header_text">Services</a></li>
                <li><a href="" className="header_text">About Us</a></li>
                <li><a href="" className="header_text">Contacts</a></li>
                <li><a href="" className="header_text">FAQ</a></li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Header;