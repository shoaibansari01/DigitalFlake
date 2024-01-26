// ProductTable.js
import React, { useState } from 'react';
import './ProductTable.css';
import { FaSort, FaEdit, FaTrash } from 'react-icons/fa';
import EditProductForm from './EditProductForm'; 

const ProductTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowEditForm(true);
  };

  const handleDeleteClick = (product) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (isConfirmed) {
      console.log('Deleting product:', product);
    }
  };

  const handleEditFormSubmit = (updatedProduct) => {
    console.log('Updating product:', updatedProduct);
    setShowEditForm(false);
  };

  const sortedData = () => {
    if (sortConfig.key !== null) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });

      return sorted;
    }

    return data;
  };

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID
              <FaSort className={`sort-icon ${sortConfig.key === 'id' ? sortConfig.direction : ''}`} />
            </th>
            <th onClick={() => handleSort('productName')}>
              Name
              <FaSort
                className={`sort-icon ${sortConfig.key === 'productName' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('packSize')}>
              Pack Size
              <FaSort
                className={`sort-icon ${sortConfig.key === 'packSize' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('category')}>
              Category
              <FaSort
                className={`sort-icon ${sortConfig.key === 'category' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('mrp')}>
              MRP
              <FaSort
                className={`sort-icon ${sortConfig.key === 'mrp' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('image')}>
              Image
              <FaSort
                className={`sort-icon ${sortConfig.key === 'image' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('status')}>
              Status
              <FaSort className={`sort-icon ${sortConfig.key === 'status' ? sortConfig.direction : ''}`} />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedData().map((product, index) => (
            <tr key={index}>
              <td>{index + 101}</td>
              <td>{product.productName}</td>
              <td>{product.packSize}</td>
              <td>{product.category}</td>
              <td>{product.mrp}</td>
              <td>{product.image}</td>
              <td className={product.status === 'Active' ? 'active' : 'inactive'}>{product.status}</td>
              <td>
                <FaEdit className="edit-icon" onClick={() => handleEditClick(product)} />
                <FaTrash className="delete-icon" onClick={() => handleDeleteClick(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditForm && (
        <EditProductForm
          product={selectedProduct}
          onClose={() => setShowEditForm(false)}
          onSubmit={handleEditFormSubmit}
        />
      )}
    </div>
  );
};

export default ProductTable;
