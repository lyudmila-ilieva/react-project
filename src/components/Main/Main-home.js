import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../../firebase';
import style from './Main.module.css';

function Main() {


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
    <div className={style.mainContainer}>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} height="100px"/>
          <p>{product.type}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p><button>Add to Wishlist</button></p>
        </div>     
      ))}  
    </div>
    )}
  
  
export default Main;



    // <div className={style.mainContainer}>
    //      <img src="img-home.jpg" alt="Home" />
    //      <h3>If you want to view all offers you have to
    //        <NavLink to="/sign-in" className={style.homeLink} exact={true}>&nbsp;&nbsp;sign in&nbsp;&nbsp;</NavLink>
    //      or
    //      <NavLink to="/sign-up" className={style.homeLink} exact={true}>&nbsp;&nbsp;register </NavLink></h3>
    //  </div>