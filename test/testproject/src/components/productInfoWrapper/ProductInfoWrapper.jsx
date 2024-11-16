import './ProductInfoWrapper.css'
import '../../all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'

export default function ProductInfoWrapper() {
    return (
        <div className="ProductInfoWrapper">
            <label>Perfumes</label>
            <h2>Lavender Perfume</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ad, sint praesentium soluta nemo autem quam dolores nobis voluptates eos. perfume that smells like lavender.loren ipsum dolor sit amet
            </p>
            <div className="offerPrice">
                <label>$50</label>
                <label><del>$100</del></label>
            </div>
            <button className="btn-cart"><FontAwesomeIcon icon={faShoppingCart } className='font-icon' />Add to Cart</button>
        </div>
    )
}