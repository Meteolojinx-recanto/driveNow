import React from 'react';

const ActiveFiltersBar = ({ selectedFilters, clearFilter }) => {
  const validKeys = ['city', 'brand', 'model'];
  const filters = Object.entries(selectedFilters).filter(([key, value]) => validKeys.includes(key) && value);

  return (
    filters.length > 0 && (
      <div className='flex space-x-2 bg-gray-100 h-7 p-3'>
        {filters.map(([key, value]) => (
          <div key={key} className='flex items-center bg-black text-white  p-6 rounded-full'>
            {value}
            <button onClick={() => clearFilter(key)} className='ml-2 text-white hover:text-gray-400 focus:outline-none'>
              ✕
            </button>
          </div>
        ))}
      </div>
    )
  );
};

export default ActiveFiltersBar;
