/* eslint-disable react-hooks/exhaustive-deps */

import background1 from '../assets/body1.jpg';
import background2 from '../assets/body2.jpg';
import background3 from '../assets/body3.png';

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
    const ref = useRef(null);


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
        <CSSTransition
            in={show}
            timeout={1000}
            classNames="fade-out"
            unmountOnExit
            nodeRef={ref}
        >
            <main>
                <div className='display_images'
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                    }}
                    ref={ref}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                    >

                    <div className={`play ${showControls ? 'visible' : 'hidden'}`}>
                        <img src={left_arrow} alt="Left Arrow" className='arrow_button' onClick={() => handleArrowClick('left')} />
                    <button> 
                            <img src={isActive ? resume : pause} alt="Pause" className='pause_button' onClick={handlePauseClick} />
                    </button>
                        <img src={right_arrow} alt="Right Arrow" className='arrow_button' onClick={() => handleArrowClick('right')} />
                    </div>
                </div>
            </main>
        </CSSTransition>
    )


}


export default Body_Top;