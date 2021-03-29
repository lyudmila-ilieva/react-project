import React, { useState, useContext } from "react";
import firebase from "../../../firebase";

import Button from '../../Button/Button';
import './Main-edit-product.css';


//EDIT PRODUCT

const EditProduct = () => {

const ref = firebase.firestore().collection('products');

function handleEditProduct(updatedProduct) {
  setLoading();
  ref
    .doc(updatedProduct.id)
    .update(updatedProduct)
    .catch((error) => {
      console.error(error);
    });
}

return (
    <>
    {products.map((product) => (
      <div key={product.id}>
      <div className="main-container-add-product">
      <img src="img-main-add-product.jpg" alt="Add Product" />
      <form className="form-add-product">
        <h3 className="form-add-product-heading">Edit Product</h3>
        <label className="add-product-element">Name:</label>
        <input
          type="text"
          value={product.name}
          className="add-product-input"
        >{product.name}</input>
        <label className="add-product-element">Description:</label>
        <textarea className="add-product-input">{product.description}</textarea>
        {/* <label htmlFor="category" className="add-product-element">Choose a category:</label>
        <select 
          name="category" 
          id="category" 
          value={category}
          className="add-product-input">
      {product.category}
        </select> */}
        <label className="add-product-element">Image URL:</label>
        <input
          type="text"
          value={product.imageUrl}
          className="add-product-input">{product.imageUrl}</input>
        <label className="add-product-element">Price</label>
        <input
          type="text"
          value={Number(product.price)}
          className="add-product-input"
        >{product.price}</input>
        <Button onClick={() => handleEditProduct({ name: product.name, description, imageUrl, price, id: product.id, creator: product.creator })}
        buttonStyle="btn-register">
          Edit
        </Button>
        </form>
      </div>  
      </div>
      ))}
 </>
  );
}
export default EditProduct;