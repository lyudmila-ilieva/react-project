import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import './CardProduct.css'

function CardProduct() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);

const ref = firebase.firestore().collection('products');

function getProducts() {
  setLoading(true);
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setProducts(items);
    setLoading(false);
  });
}

function getProducts(){
  setLoading(true);
  ref.get().then((item) => {
const items = item.docs.map((doc) => doc.data());
setProducts(items);
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
          <figure className="card-product-image-wrap">
            <img src={product.imageUrl} height="100px" alt="Product" className="card-product-img"/>
          </figure>         
          <div className="card-product-info">
            <h1>{product.name}</h1>
            <p>{product.type}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </li>
        <button>Add to Wishlist <i class="fas fa-heart"/></button>
        </div>
        ))}
        </>
    )
}

export default CardProduct;