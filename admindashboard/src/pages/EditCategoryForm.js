import React, { useState, useEffect } from "react";
import "./EditCategoryForm.css";

const EditCategoryForm = ({ category, onClose, onSubmit }) => {
  const [editedCategory, setEditedCategory] = useState(category);

  useEffect(() => {
    setEditedCategory(category);
  }, [category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedCategory);
    onClose();
  };

  return (
    <div className="edit-category-form">
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-input">
            <label>Category Name:</label>
            <input
              type="text"
              name="categoryName"
              value={editedCategory.categoryName || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-input">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={editedCategory.description || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-input">
            <label>Status:</label>
            <select
              name="status"
              value={editedCategory.status || ""}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;
