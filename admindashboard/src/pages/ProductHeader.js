// ProductHeader.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import AddProductForm from './AddProductForm';
import ProductTable from './ProductTable';
import './ProductHeader.css';

const ProductHeader = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [productData, setProductData] = useState([]);

  const handleAddNewClick = () => {
    setShowAddProductForm(true);
  };

  const handleFormSubmit = (formData) => {
    setProductData([...productData, formData]);
    setShowAddProductForm(false);
  };

  return (
    <div>
      {showAddProductForm ? (
        <AddProductForm onSubmit={handleFormSubmit} onClose={() => setShowAddProductForm(false)} />
      ) : (
        <div className='product-header'>
          <div className='product-icon'>
            <img src='/img/cat-logo.png' alt='Product Icon' className='product-icon' />
          </div>
          <h2 className='product-title'>Product</h2>
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
      <ProductTable data={productData} />
    </div>
  );
};

export default ProductHeader;
