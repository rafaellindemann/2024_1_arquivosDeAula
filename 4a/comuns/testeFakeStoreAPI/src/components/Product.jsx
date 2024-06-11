// import React from 'react'
// import axios from 'axios';
// import './Product.css'

// function Product(props) {
//     let product = props.product;

//     const handleDelete = (id) => {
//         // DELETE request to remove a product
//         axios.delete(`https://fakestoreapi.com/products/${id}`)
//           .then(() => {
//             setProducts(products.filter(product => product.id !== id));
//           })
//           .catch(error => {
//             console.error('There was an error deleting the product!', error);
//           });
//       };


//   return (
//     <div className='productContainer'>
//         <img src={product.image} alt="" className='productImage'/>
//       <p>
//         {product.title}
//       </p>
//       <p>
//         ${product.price}
//       </p>
//       <p>
//         {product.description}
//       </p>
//       <p>
//         #{product.category}
//       </p>

//               <button onClick={() => handleDelete(product.id)}>Delete</button>
//     </div>
//   )
// }

// export default Product