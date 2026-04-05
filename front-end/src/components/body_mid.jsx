import { forwardRef } from 'react'


const Body_Mid = forwardRef((props, ref) => { 
    return(
        <main ref={ref} className='body_mid'> 
        <h1 id="services_header">APPLICATION</h1>
            <div className='application_container'>
                <div className='application_choices'> 
                    <div className='application_items'>
                        {applicationItems.map((item, index) => (
                        <div key={index} className='sti_info'>
                            <h1>{item.number}</h1>
                            <p>{item.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Body_Mid;

const applicationItems = [
    { number: 1, title: 'Check Application Status/Information' },
    { number: 2, title: 'Set Appointment Details' },
]

