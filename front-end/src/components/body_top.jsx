/* eslint-disable react-hooks/exhaustive-deps */

import background1 from '../assets/beep1.png';
import background2 from '../assets/beep2.png';
import background3 from '../assets/beep3.png';

import left_arrow from '../assets/left_arrow.png';
import right_arrow from '../assets/right_arrow.png';
import pause from '../assets/pause.png';
import resume from '../assets/resume.png';  

import {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';


function Body_Top() {

    const images = [background1, background2, background3];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const containerRef = useRef(null);
    const imageRef = useRef(null);


    useEffect(() => {
        
        const interval = setInterval(() => {
            if(!isActive) {
                setShow(false);
                setTimeout(() => {
                    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
                    setShow(true);
                }, 500);
            }
        }, 5000);

        return () => clearInterval(interval);

    }, [!isActive]);

    useEffect(() => { 
        const timer = setTimeout(() => {
            setShowControls(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, [])

    function handleArrowClick(direction) {

        if (direction === 'left') {
            setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length); 
        } else if (direction === 'right') {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }
    }

    function handlePauseClick() {
        setIsActive(!isActive);
    }

    return (
        <main>
            <div className='display_images'
                ref={containerRef}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                >
                <CSSTransition
                    in={show}
                    timeout={1000}
                    classNames="fade-out"
                    unmountOnExit
                    nodeRef={imageRef}
                >
                    <img ref={imageRef} src={images[currentIndex]} alt="background" className="background-img" />
                </CSSTransition>

                <div className={`play ${showControls ? 'visible' : 'hidden'}`}>
                    <button type="button" className="control_button arrow_button" onClick={() => handleArrowClick('left')} aria-label="Previous slide">
                        <img src={left_arrow} alt="" />
                    </button>
                    <button type="button" className="control_button pause_button" onClick={handlePauseClick} aria-label={isActive ? 'Resume slideshow' : 'Pause slideshow'}>
                        <img src={isActive ? resume : pause} alt="" />
                    </button>
                    <button type="button" className="control_button arrow_button" onClick={() => handleArrowClick('right')} aria-label="Next slide">
                        <img src={right_arrow} alt="" />
                    </button>
                </div>
            </div>
        </main>
    )


}


export default Body_Top;