// AddProductForm.js
import React, { useState } from 'react';
import './AddProductForm.css';

const AddProductForm = ({ onClose, onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [packSize, setPackSize] = useState('');
  const [category, setCategory] = useState('');
  const [mrp, setMRP] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName, packSize, category, mrp, image, status });
    onClose();
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-input">
            <label>Product Name</label>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Pack Size</label>
            <input type="text" value={packSize} onChange={(e) => setPackSize(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input">
            <label  style={{top:'-8px'}}>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value=""></option>
              <option value="Milk">Milk</option>
              <option value="Fruit">Fruit</option>
            </select>
          </div>
          <div className="form-input">
            <label  style={{top:'-8px'}}>MRP</label>
            <input type="text" value={mrp} onChange={(e) => setMRP(e.target.value)} required />
          </div>
          <div className="form-input">
            <label  style={{top:'-8px'}}>Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input">
            <label style={{top:'-8px'}}>Status</label>
            <select style={{width:'293px'}} value={status} onChange={(e) => setStatus(e.target.value)}>
             <option value="Active"></option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
