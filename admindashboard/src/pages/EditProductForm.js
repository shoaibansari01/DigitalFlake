// EditProductForm.js
import React, { useState } from 'react';

const EditProductForm = ({ product, onClose, onSubmit }) => {
  const [productName, setProductName] = useState(product.name);
  const [packSize, setPackSize] = useState(product.packSize);
  // Add other state variables for other fields as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the updated product object
    const updatedProduct = {
      id: product.id, // assuming there is an 'id' field in the product object
      name: productName,
      packSize: packSize,
      // Add other fields as needed
    };

    // Call the onSubmit callback with the updated product
    onSubmit(updatedProduct);
    // Close the form
    onClose();
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for editing product details */}
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />

        <label>Pack Size:</label>
        <input type="text" value={packSize} onChange={(e) => setPackSize(e.target.value)} required />

        {/* Add other input fields for other product details as needed */}
        
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditProductForm;
