import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import { forwardRef } from 'react'

function Squares( {title, description, image}) { 
    return(
        <div className='squares'>
            <img src={image} alt={title} className='square_image' />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

const Body_Mid = forwardRef((props, ref) => { 
    return(
        <main ref={ref} className='body_mid'> 
            <div className='container'>
                {stiMeaning.map((item, index) => (
                    <Squares key={index} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
        </main>
    )
})

export default Body_Mid;


const stiMeaning = [
    {
        image: img1,
        title: 'Easy access to learning modules',
        description: 'Students can study ahead, review past lessons, and watch instructional videos with a click or a tap of a button on any gadget.'
    },
    {
        image: img2,
        title: 'Interactive activities and assessments',
        description: 'Students can test their knowledge and skills through interactive polls, quizzes, and debates, among others.'
    }, 
    {
        image: img3,
        title: 'Student attendance tracking',
        description: 'Marking student attendance for an online class is more convenient whether the student logs in early, on time, late, or is offline.' 
    }, 
    { 
        image: img4,
        title: 'Collaborate with classmates',
        description: 'The eLMS allows the students to chat with classmates, join forum discussions, write a blog, and facilitate a group work activity — all within the site.'
    }
];