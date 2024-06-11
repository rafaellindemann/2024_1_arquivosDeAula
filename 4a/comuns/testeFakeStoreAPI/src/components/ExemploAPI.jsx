import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Product from './Product';
import './Product.css'

const ExemploAPI = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ title: '', price: 0, description: '', image: '', category: '' });
  const [updateProduct, setUpdateProduct] = useState({ id: '', title: '', price: 0, description: '', image: '', category: '' });


  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    // GET request to fetch products
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handlePost = () => {
    // POST request to add a product
    axios.post('https://fakestoreapi.com/products', product)
      .then(response => {
        setProducts([...products, response.data]);
        setProduct({ title: '', price: 0, description: '', image: '', category: '' });
      })
      .catch(error => {
        console.error('There was an error posting the product!', error);
      });
  };

  const handleUpdate = () => {
    // PUT request to update a product
    axios.put(`https://fakestoreapi.com/products/${updateProduct.id}`, updateProduct)
      .then(response => {
        const updatedProducts = products.map(p => p.id === updateProduct.id ? response.data : p);
        setProducts(updatedProducts);
        setUpdateProduct({ id: '', title: '', price: 0, description: '', image: '', category: '' });
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
      });
  };

  const handleDelete = (id) => {
    // DELETE request to remove a product
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the product!', error);
      });
  };

  return (
    <div>
      <h1>Fake Store API Example</h1>
      
      <div className='divCreate'>
        <h2>Create Product</h2>
        <label htmlFor="">Item Name</label>
        <input 
          type="text" 
          placeholder="Title" 
          value={product.title} 
          onChange={(e) => setProduct({ ...product, title: e.target.value })} 
        />
        <label htmlFor="">Price</label>
        <input 
          type="number" 
          placeholder="Price" 
          value={product.price} 
          onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })} 
        />
        <label htmlFor="">Description</label>
        <input 
          type="text" 
          placeholder="Description" 
          value={product.description} 
          onChange={(e) => setProduct({ ...product, description: e.target.value })} 
        />
        <label htmlFor="">Image URL</label>
        <input 
          type="text" 
          placeholder="Image URL" 
          value={product.image} 
          onChange={(e) => setProduct({ ...product, image: e.target.value })} 
        />
        <label htmlFor="">Category</label>
        <input 
          type="text" 
          placeholder="Category" 
          value={product.category} 
          onChange={(e) => setProduct({ ...product, category: e.target.value })} 
        />
        <button onClick={handlePost}>Add Product</button>
      </div>
      
      <div className='divUpdate'>
        <h2>Update Product</h2>
        <label htmlFor="">ID</label>
        <input 
          type="text" 
          placeholder="ID" 
          value={updateProduct.id} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, id: e.target.value })} 
        />
        <label htmlFor="">Item Name</label>
        <input 
          type="text" 
          placeholder="Title" 
          value={updateProduct.title} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, title: e.target.value })} 
        />
        <label htmlFor="">Price</label>
        <input 
          type="number" 
          placeholder="Price" 
          value={updateProduct.price} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, price: parseFloat(e.target.value) })} 
        />
        <label htmlFor="">Description</label>
        <input 
          type="text" 
          placeholder="Description" 
          value={updateProduct.description} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, description: e.target.value })} 
        />
        <label htmlFor="">Image URL</label>
        <input 
          type="text" 
          placeholder="Image URL" 
          value={updateProduct.image} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, image: e.target.value })} 
        />
        <label htmlFor="">Category</label>
        <input 
          type="text" 
          placeholder="Category" 
          value={updateProduct.category} 
          onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value })} 
        />
        <button onClick={handleUpdate}>Update Product</button>
      </div>

      <div>
        <h2>Products</h2>
        
        {/* <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul> */}
        {/* <div className='productList'>
          {products.map((product) => (
            <Product product={product} key={product.id}/>

          ))}

        </div> */}
        <div className='productList'>
          {products.map((product) => (
            <div key={product.id} className='productContainer'>
            <img src={product.image} alt="" className='productImage'/>
            <p>
                {product.title}
            </p>
            <p>
                ${product.price}
            </p>
            <p>
                {product.description}
            </p>
            <p>
                #{product.category}
            </p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>

          ))}

        </div>
      </div>
    </div>
  );
};

export default ExemploAPI;
