import React, { useState, useEffect } from 'react';
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
            <button type="submit" className="add-wishlist-btn">Add to Wishlist <i className="fas fa-heart"/></button>
            </div>
          </div>
        </li> 
        
        </div>
        ))}
        </>
    )
  } 

export default CardProduct;