// AddCategoryForm.js
import React, { useState } from 'react';
import './AddCategoryForm.css';

const AddCategoryForm = ({ onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ categoryName, description, status });
    onClose();
  };

  return (
    <div className="add-category-form">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-input">
            <label>Category Name</label>
            <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="form-input">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
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

export default AddCategoryForm;
