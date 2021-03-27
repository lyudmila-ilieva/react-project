import './Products.css'
import CardProduct from './CardProduct';

function Cards() {
  
    return (
      <>
        <div className="products">
            <h1>Check out our products:</h1>
            <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-products">
                    <CardProduct />
                </ul>
            </div>
            </div>
        </div>
      </>
    )
}

export default Cards;