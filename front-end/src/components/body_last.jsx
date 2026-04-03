import bg from '../assets/bg.jpg';

function Body_Last() { 
    return(
        <main> 
            <div className='background' style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'fixed',
            }}>
                    {stiInfo.map((item, index) => (
                        <div key={index} className='sti_info'>
                            <h1>{item.number}</h1>
                            <p>{item.title}</p>
                        </div>
                    ))}
            </div>
        </main>
    ) 
}

export default Body_Last;

const stiInfo = [
    {
        number: '19,167', 
        title: 'Courses'
    }, 
    { 
        number: '2,109',
        title: 'Teachers'
    }
]