import MyProducts from '../components/Main/MyProducts/MyProducts';

function MyProductsPage() {
    return (
      <>
        <div className="products">
            <h1 className="products-header">
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>
                &nbsp;These are your products:&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/>&nbsp;
                <i className="fas fa-heart"/></h1>
            <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-products">
                <MyProducts /> 
                 </ul>
            </div>
            </div>
        </div>
      </>
    )
}

export default MyProductsPage;