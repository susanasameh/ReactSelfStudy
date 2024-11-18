import './task2ImageWrapper.css'
import heroImage from '../../../assets/Images/Task2webPage/hero-desktop.jpg'



export default function Task2ContentWrapper() {
    return (
        <div className="task2-image-wrapper">
            <img src={heroImage} alt="Task 2 Image" className='task2-image'/>
        </div>
    )
}