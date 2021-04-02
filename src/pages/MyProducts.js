import MyProducts from '../components/Main/MyProducts/MyProducts';

function MyProductsPage() {
    return (
      <>
        <div className="products">
            <h1 className="products-header">
                &nbsp;These are your products:&nbsp;</h1>
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