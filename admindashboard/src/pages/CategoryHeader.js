// CategoryHeader.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AddCategoryForm from './AddCategoryForm';
import CategoryTable from './CategoryTable';
import './CategoryHeader.css';

const CategoryHeader = () => {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const handleAddNewClick = () => {
    setShowAddCategoryForm(true);
  };

  const handleFormSubmit = (formData) => {
    setCategoryData([...categoryData, formData]);
    setShowAddCategoryForm(false);
  };

  return (
    <div>
      {showAddCategoryForm ? (
        <AddCategoryForm onSubmit={handleFormSubmit} onClose={() => setShowAddCategoryForm(false)} />
      ) : (
        <div className='category-header'>
          <div className='category-icon'>
            <img src='/img/cat-logo.png' alt='Category Icon' className='category-icon' />
          </div>
          <h2 className='category-title'>Category</h2>
          <div className='search-container'>
            {/* Search Bar with Icon */}
            <div className='search'>
              <FaSearch className='search-icon' />
              <input type="text" className='search-input' placeholder='Search...' />
            </div>
          </div>
          <div>
            {/* Add New Button */}
            <button className='add-new-button' onClick={handleAddNewClick}>
              Add New
            </button>
          </div>
        </div>
      )}
      <CategoryTable data={categoryData} />
    </div>
  );
};

export default CategoryHeader;
