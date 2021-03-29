import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import './Products.css'

function CardProduct() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);

const ref = firebase.firestore().collection('products');

function getProducts() {
  setLoading(true);
  ref
  .orderBy('price', 'desc')
  .onSnapshot((querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  });
}

function getProductsAsc() {
  setLoading(true);
  ref
  .orderBy('price', 'asc')
  .onSnapshot((querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  });
}

function getProductsDesc() {
  setLoading(true);
  ref
  .orderBy('price', 'desc')
  .onSnapshot((querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  });
}
function getProductsFurniture() {
  setLoading(true);
  ref
  .where('category', '==', 'furniture')
  .onSnapshot((querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  });
}
function getProductsAccessories() {
  setLoading(true);
  ref
  .where('category', '==', 'accessories')
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
        <div>
        <h3 className="sort-products">Sort products</h3>
          <ul className="sort-by"> <i className="fas fa-heart"/>&nbsp;By price:
            <ul><button onClick={() => getProductsAsc()} className="sort-btn">Asc &#x2191;</button></ul>
            <ul> <button onClick={() => getProductsDesc()} className="sort-btn">Desc &#x2193;</button></ul>
          </ul>
          <ul className="sort-by"> <i className="fas fa-heart"/>&nbsp;By category:
            <ul><button onClick={() => getProductsFurniture()} className="sort-btn">Furniture</button></ul>
            <ul> <button onClick={() => getProductsAccessories()}className="sort-btn">Accessories</button></ul>
          </ul> 
        </div>
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
            {/* <button className="add-wishlist-btn">Add to Wishlist <i className="fas fa-heart"/></button> */}  
            </div>
          </div>
        </li> 
        </div>
        ))}
        </>
    )
  } 

export default CardProduct;;