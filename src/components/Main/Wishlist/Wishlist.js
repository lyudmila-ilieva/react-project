import { useState, useEffect, useContext } from 'react';
import firebase from '../../../firebase';
import { AuthContext } from '../../../Auth';

import './Wishlist.css';

function  Wishlist() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);

const { currentUser } = useContext(AuthContext);

const ref = firebase.firestore().collection('products');

function getProducts() {
  setLoading(true);
  ref
  .where('wishlist', 'array-contains', currentUser.uid)
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

const handleRemoveFromWishlist = (product) => {
    ref
    .doc(product.id)
    .update({
      wishlist: firebase.firestore.FieldValue.arrayRemove(currentUser.uid)
    })
}  
  
  if(loading){
    return <h1>Loading ...</h1>
  }

    return (
        <>
        {products.map((product) => (
          <div key={product.id}>
        <li className="card-product"> 
          <figure className="card-product-image-wrap" data-category={`${product.price} €`}>
            <img src={product.imageUrl} alt="Product" className="card-product-img"/>
          </figure>         
          <div className="card-product-info">
          <div className="card-product-text">
            <h2>{product.name}</h2>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Description:</b> {product.description}</p>  
            <div><button className="my-products-btn" onClick={() => handleRemoveFromWishlist(product)}>Remove</button></div>
            </div>
          </div>
        </li> 
        </div>
        ))}
        </>
    )
  } 

export default Wishlist;