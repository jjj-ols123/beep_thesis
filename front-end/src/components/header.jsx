import logo from '../assets/train-logo.png'; 

function Header({ servicesRef }) { 

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    }

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
                <li><a onClick={() => scrollToSection(servicesRef)} className="header_text">Services</a></li>
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