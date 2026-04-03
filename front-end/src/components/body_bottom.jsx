import neo from '../assets/neo.png'

function Body_Bottom() { 
    return(
        <main className='body_bottom'>
            <div className='container'>
                <img src={neo} alt="Neo" className='neo_image' />
                <div className='description'> 
                    <p> 
                        For more than 4 years, STI's blended learning approach using eLearning Management System (eLMS) makes education effective and accessible anytime, anywhere.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </main>
    )
}

export default Body_Bottom;