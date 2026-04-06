import { forwardRef } from 'react'


const Body_Mid = forwardRef((props, ref) => { 
    return(
        <main ref={ref} className='body_mid'> 
        <h1 id="services_header">APPLICATION</h1>
            <div className='body_mid_container'>
                <div className='application_choices'> 
                    <div className='application_items'>
                        {applicationItems.map((item, index) => (
                        <div key={index} className='application_button'>
                            <button>{item.title}</button>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='application_sections'>
                    
                </div>
            </div>
        </main>
    )
})

export default Body_Mid;

const applicationItems = [
    { title: 'Check Application Status/Information' },
    { title: 'Set Appointment Details' },
]

