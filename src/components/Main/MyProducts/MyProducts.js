import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../firebase';
import { AuthContext } from '../../../Auth';

import './MyProducts.css';

function  MyProducts() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);

const { currentUser } = useContext(AuthContext);

const ref = firebase.firestore().collection('products');

function getProducts() {
  setLoading(true);
  ref.where('creator', '==', currentUser.uid).onSnapshot((querySnapshot) => {
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
            <div><button className="my-products-btn"><Link to={`/edit-product/${product.id}`} className="link-edit-product">Edit</Link>
            </button><button className="my-products-btn" onClick={() => deleteProduct(product.id)}>Delete</button></div>
            </div>
          </div>
        </li> 
        </div>
        ))}
        </>
    )
  } 

export default MyProducts;