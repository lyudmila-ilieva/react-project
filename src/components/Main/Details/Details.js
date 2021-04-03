import { useState, useEffect } from 'react';
import firebase from "../../../firebase";
import './Details.css';


//DETAILS

const Details = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);


const ref = firebase.firestore().collection('products');

let id = window.location.pathname.split("/")[2];

function getProducts() {
  setLoading(true);
  ref
  .where('id', '==', id)
  .onSnapshot((querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  });
}
  useEffect(() => {
    getProducts();
    }, []);
    
    
    if(loading){
      return <h1>Loading ...</h1>
    }

    return (
        <>
        <div className="product-details">
        {products.map((product) => (
          <div key={product.id}>
          <h2 className="details-name">{product.name}</h2>
          <img src={product.imageUrl} alt="Product" className="product-image" />       
          <div className="card-product-text-details">
            <p><b>Category:</b> {product.category}</p>
            <p><b>Description:</b> {product.description}</p>
            <p><b>Price:</b> {product.price} €</p>
            </div>
        </div>
        ))}
        </div>
        </>
    )
}
export default Details;