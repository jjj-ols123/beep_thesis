import { forwardRef, useState } from 'react'


const Body_Mid = forwardRef((props, ref) => { 
    const [activeStep, setActiveStep] = useState(1)
    const [isDragging, setIsDragging] = useState(false)
    const [uploadedFile, setUploadedFile] = useState(null)

    const currentStep = stepContent[activeStep]

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        
        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleFileUpload(files[0])
        }
    }

    const handleFileSelect = (e) => {
        const files = e.target.files
        if (files.length > 0) {
            handleFileUpload(files[0])
        }
    }

    const handleFileUpload = (file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
        if (validTypes.includes(file.type)) {
            setUploadedFile(file)
            console.log('File uploaded:', file.name)
        } else {
            alert('Please upload a valid image (JPEG, PNG) or PDF file')
        }
    }

    return(
        <main ref={ref} className='body_mid'> 
        <h1 id="services_header">APPLICATION</h1>
            <div className='body_mid_container'>
                <div className='application_choices'> 
                    <div className='stepper_items'>
                        {applicationItems.map((item) => (
                        <button
                            key={item.step}
                            type="button"
                            className={`stepper_button ${activeStep === item.step ? 'active' : ''}`}
                            aria-pressed={activeStep === item.step}
                        >
                            <span className='step_number'>{item.step}</span>
                            <span className='step_title'>{item.title}</span>
                        </button>
                    ))}
                    </div>
                </div>
                <div className='application_sections'>
                    <h1>{currentStep.title}</h1>
                    <p>{currentStep.description}</p>

                    {activeStep === 1 && (
                        <div>
                            <h2>Full Name</h2>
                            <input type="text" placeholder='e.g. Juan Dela Cruz' />
                            <h2>Upload Student ID / COR</h2>
                            <div 
                                className={`drag-area ${isDragging ? 'dragging' : ''}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => document.getElementById('file-input').click()}
                            >
                                <input 
                                    id="file-input"
                                    type="file" 
                                    accept="image/jpeg,image/png,image/jpg,application/pdf"
                                    onChange={handleFileSelect}
                                    style={{ display: 'none' }}
                                />
                                {uploadedFile ? (
                                    <span className='drag-area-title'>Uploaded: {uploadedFile.name}</span>
                                ) : (
                                    <span className='drag-area-title'>Click or drag photo of ID here</span>
                                )}
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className='empty-step-panel'>
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div className='empty-step-panel'>
                        </div>
                    )}
                </div>
                <div className={`next_button_container ${activeStep === 1 ? 'single_button' : ''}`}>
                    {activeStep > 1 && (
                        <button className='step_button' id='previous_button' onClick={() => setActiveStep(activeStep - 1)}>{buttonText[2].text}</button>
                    )}
                    {activeStep < 3 ? (
                        <button className='step_button' id='next_button' onClick={() => setActiveStep(activeStep + 1)}>{buttonText[0].text}</button>
                    ) : (
                        <button className='step_button' id='submit_button'>{buttonText[1].text}</button>
                    )}
                </div>
            </div>
        </main>
    )
})

export default Body_Mid;

const buttonText = [
    { text: 'Next' },
    { text: 'Submit' },
    { text: 'Previous' },
]

const applicationItems = [
    { step: 1, title: "Applicant's Information" },
    { step: 2, title: 'Date, Time, Location' },
    { step: 3, title: 'Application Information' },
]

const stepContent = {
    1: {
        title: "Applicant's Information",
        description: 'Complete the details to schedule your card processing.',
    },
    2: {
        title: 'Date, Time, Location',
        description: 'Select your preferred schedule and location.',
    },
    3: {
        title: 'Application Information',
        description: 'Review your application details and submit.',
    },
}

