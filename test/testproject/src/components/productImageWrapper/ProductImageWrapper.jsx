import './ProductImageWrapper.css'
import product1 from '../../assets/Images/Products/perfume1.jpeg'

export default function ProductImageWrapper() {
    return (
        <div className='product-image-wrapper'>
          <img src={product1} className='product-image' />  
        </div>
        
    )
}

