import React, { useState, useContext } from "react";
import firebase from "../../../firebase";
import {v4 as uuidv4} from 'uuid';
import { AuthContext } from "../../../Auth";

import Button from '../../Button/Button';
import'./Main-add-product.css';


//ADD PRODUCT


const AddProduct = () => {

const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [description, setDescription] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [price, setPrice] = useState('');

const { currentUser } = useContext(AuthContext);

const ref = firebase.firestore().collection("products");
  
const handleAddProduct = (newProduct) => {
  ref
  .doc(newProduct.id)
  .set(newProduct)
  .catch((error) => {
      console.error(error)
  });  
}

return (
    <>
      <div className="main-container-add-product">
      <img src="img-main-add-product.jpg" alt="Add Product" />
      <form className="form-add-product">
        <h3 className="form-add-product-heading">Add New Product</h3>
        <label className="add-product-element">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="add-product-input"
        />
        <label className="add-product-element">Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className="add-product-input"
        />
        <label htmlFor="category" className="add-product-element">Choose a category:</label>
        <select 
          name="category" 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="add-product-input"
        >
        <option value="-">-</option>
        <option value="furniture">Furniture</option>
        <option value="accessories">Accessories</option>
        <option value="other">Other</option>
        </select>
        <label className="add-product-element">Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="add-product-input"
        />
        <label className="add-product-element">Price</label>
        <input
          type="number"
          min="1"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="add-product-input"
        />
        <Button onClick={() => handleAddProduct({ name, description, category, imageUrl, price, wishlist: [], id: uuidv4(), creator: currentUser.uid, createdAt: new Date() })}
        buttonStyle="btn-primary">
          Submit
        </Button>
        </form>
      </div>  
 </>
  );
}
export default AddProduct;