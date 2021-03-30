import { useState, useEffect } from 'react';
import firebase from "../../../firebase";

import Button from '../../Button/Button';
import './Main-edit-product.css';


//EDIT PRODUCT

const EditProduct = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [price, setPrice] = useState('');

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
    
function handleEditProduct(updatedProduct) {
  ref
    .doc(updatedProduct.id)
    .update(updatedProduct)
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
      <form className="form-add-product">
        <h3 className="form-add-product-heading">Edit Product</h3>
        <label className="add-product-element">Name:</label>
        <input
          type="text"
          defaultValue={product.name}
          onChange={(e) => setName(e.target.value)}
          className="add-product-input"
        />
        <label className="add-product-element">Description:</label>
        <textarea 
        defaultValue={product.description}
        onChange={(e) => setDescription(e.target.value)} 
        className="add-product-input"/>
        <label className="add-product-element">Image URL:</label>
        <input
          type="text"
          defaultValue={product.imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="add-product-input"/>
        <label className="add-product-element">Price</label>
        <input
          type="text"
          defaultValue={Number(product.price)}
          onChange={(e) => setPrice(e.target.value)}
          className="add-product-input"
        />
        <Button onClick={() => handleEditProduct({ name: product.name, description, imageUrl, price, id: product.id, creator: product.creator })}
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