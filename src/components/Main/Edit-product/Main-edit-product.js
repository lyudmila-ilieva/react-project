import { useState, useEffect } from 'react';
import firebase from "../../../firebase";

import Button from '../../Button/Button';
import './Main-edit-product.css';


//EDIT PRODUCT

const EditProduct = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');

const ref = firebase.firestore().collection('products');

let id = window.location.pathname.split("/")[2];


// function myTrim(id) {
//   return id.replace('?','');
// }

// if(id[id.length-1] === '?'){
// myTrim()
// }


function getProducts() {
  setLoading(true);
  ref
  .where('id', '==', id)
  // .where('id', '==', `${id}?`)
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
    
function handleEditProduct(product) {
  ref
    .doc(product.id)
    .update(product)
    .catch((error) => {
      console.error(error);
    });
}

return (
    <>
    <div className="main-container-edit-product">
    {/* <img src="img-main-add-product.jpg" alt="Edit Product" />  */}
    {products.map((product) => (
      <div key={product.id}>
      <form className="form-edit-product">
        <h3 className="form-edit-product-heading">Edit Product</h3>
        <label className="edit-product-element">Name:</label>
        <input
          type="text"
          defaultValue={product.name}
          // onChange={(e) => setName(e.target.value)}
          className="edit-product-input"
        />
        <label className="edit-product-element">Description:</label>
        <textarea 
        defaultValue={product.description}
        onChange={(e) => setDescription(e.target.value)} 
        className="edit-product-input"/>
        <label className="edit-product-element">Image URL:</label>
        <input
          type="text"
          defaultValue={product.imageUrl}
          // onChange={(e) => setImageUrl(e.target.value)}
          className="edit-product-input"/>
        <label className="edit-product-element">Price</label>
        <input
          type="number"
          min="1"
          defaultValue={product.price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="edit-product-input"
        />
        <Button onClick={() => handleEditProduct({ name: product.name, description, imageUrl: product.imageUrl, price, id: product.id, creator: product.creator })}
        buttonStyle="btn-primary">
        Edit
        </Button>
        </form>
      </div>  
    ))}
    </div>
 </>
  );
}
export default EditProduct;