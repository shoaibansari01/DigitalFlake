import React, { useState } from 'react';
import './CategoryTable.css';
import { FaSort, FaEdit, FaTrash } from 'react-icons/fa';
import EditCategoryForm from './EditCategoryForm';

const CategoryTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setShowEditForm(true);
  };

  const handleDeleteClick = (category) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this category?');

    if (isConfirmed) {
      console.log('Deleting category:', category);
    }
  };

  const handleEditFormSubmit = (updatedCategory) => {
    console.log('Updating category:', updatedCategory);
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
    <div className="category-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID
              <FaSort className={`sort-icon ${sortConfig.key === 'id' ? sortConfig.direction : ''}`} />
            </th>
            <th onClick={() => handleSort('categoryName')}>
              Name
              <FaSort
                className={`sort-icon ${sortConfig.key === 'categoryName' ? sortConfig.direction : ''}`}
              />
            </th>
            <th onClick={() => handleSort('description')}>
              Description
              <FaSort
                className={`sort-icon ${sortConfig.key === 'description' ? sortConfig.direction : ''}`}
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
          {sortedData().map((category, index) => (
            <tr key={index}>
              <td>{index + 101}</td>
              <td>{category.categoryName}</td>
              <td>{category.description}</td>
              <td className={category.status === 'Active' ? 'active' : 'inactive'}>{category.status}</td>
              <td>
                <FaEdit className="edit-icon" onClick={() => handleEditClick(category)} />
                <FaTrash className="delete-icon" onClick={() => handleDeleteClick(category)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditForm && (
        <EditCategoryForm
          category={selectedCategory}
          onClose={() => setShowEditForm(false)}
          onSubmit={handleEditFormSubmit}
        />
      )}
    </div>
  );
};

export default CategoryTable;
