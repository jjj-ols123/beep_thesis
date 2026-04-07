import logo from './assets/train-logo.png'; 

function Header({ servicesRef }) { 

    const scrollToSection = (event, elementRef) => {
        event.preventDefault();
        const target = elementRef.current;

        if (!target) {
            return;
        }

        const startPosition = window.scrollY;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let startTime = null;

        const easeInOutCubic = (time) => (
            time < 0.5
                ? 4 * time * time * time
                : 1 - Math.pow(-2 * time + 2, 3) / 2
        );

        const animateScroll = (currentTime) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
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
                <li><a href="#services" onClick={(event) => scrollToSection(event, servicesRef)} className="header_text">Apply Now!</a></li>
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