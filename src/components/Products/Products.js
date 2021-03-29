import './Products.css'
import CardProduct from './CardProduct';
import { NavLink } from 'react-router-dom';

function Cards() {

    return (
      <>
        <div className="products">
            <h1 className="products-header">Check out our products or <NavLink to="/add-product" activeStyle={{fontSize: '1.1rem'}} className="add-product-link">add</NavLink> a new one:</h1>
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