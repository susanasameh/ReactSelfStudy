import './ImageWrapper.css'
import Image3 from '../../assets/Images/3.jpg'

export default function ImageWrapper() {
    return (
        <div className="image-wrapper">
            <img className="imageWrapper" src={Image3} />
        </div>
    )
}