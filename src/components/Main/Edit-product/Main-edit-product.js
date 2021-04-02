import { useState, useEffect } from 'react';
import firebase from "../../../firebase";

import Button from '../../Button/Button';
import './Main-edit-product.css';


//EDIT PRODUCT

const EditProduct = () => {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState([]);
const [price, setPrice] = useState('');

const ref = firebase.firestore().collection('products');

let id = window.location.pathname.split("/")[2];

function getProducts() {
  setLoading(true);
  ref
  .where('id', '==', id)
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
    {products.map((product) => (
      <div key={product.id}>
      <form className="form-edit-product">
        <h3 className="form-edit-product-heading">Edit Product</h3>
        <label className="edit-product-element">Name:</label>
        <input
          type="text"
          defaultValue={product.name}
          disabled
          className="edit-product-input"
        />
        <label className="edit-product-element">Description:</label>
        <textarea 
        defaultValue={product.description}
        disabled
        className="edit-product-input"/>
        <label className="edit-product-element">Price</label>
        <input
          type="number"
          min="1"
          defaultValue={product.price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="edit-product-input"
        />
        <Button onClick={() => handleEditProduct({ name: product.name, description:product.description, price, id: product.id, creator: product.creator })}
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