import Wishlist from '../components/Main/Wishlist/Wishlist';

function WishlistPage() {
    return (
      <>
        <div className="products">
            <h1 className="products-header">
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>
                &nbsp;These are your favourite products:&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/></h1>
            <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-products">
                <Wishlist /> 
                 </ul>
            </div>
            </div>
        </div>
      </>
    )
}

export default WishlistPage;