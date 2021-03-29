import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import './Products.css'

function CardProduct() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);

const ref = firebase.firestore().collection('products');

function getProducts() {
  setLoading(true);
  ref.onSnapshot((querySnapshot) => {
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


function deleteProduct(productId) {
  ref
  .doc(productId)
  .delete()
  .catch((error) => {
    console.error(error)
  });
}

    return (
        <>
        {products.map((product) => (
          <div key={product.id}>
        <li className="card-product"> 
          <figure className="card-product-image-wrap" data-category={`${product.price}$`}>
            <img src={product.imageUrl} alt="Product" className="card-product-img"/>
          </figure>         
          <div className="card-product-info">
          <div className="card-product-text">
            <h2>{product.name}</h2>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Description:</b> {product.description}</p>  
            <button className="add-wishlist-btn">Add to Wishlist <i className="fas fa-heart"/></button>
            <button><Link to={`/edit-product/${product.id}`}>Edit</Link></button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>     
            </div>
          </div>
        </li> 
        </div>
        ))}
        </>
    )
  } 

export default CardProduct;