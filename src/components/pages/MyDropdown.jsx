

// function MyDropdown({ listOfCategory }) {
//     return (
//       <div>
//         <label htmlFor="categorySelect">Select a category:</label>
//         <select id="categorySelect" className="bg-slate-800">
//           <option value="">Select a category...</option>
//           {listOfCategory.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   }
  
//   export default MyDropdown;

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { getListOfCategory } from '@/sevices/jobService';
import FilterJob from './FilterJob';

// Define the dropdown component
function CategoryDropdown({ listOfCategories }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="text-center mt-4">
      <label htmlFor="categorySelect" className="mr-2 text-gray-200">
        Select a category:
      </label>
      <select
        id="categorySelect"
        className="bg-gray-800 text-gray-200 px-2 py-1"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Select a category...</option>
        {listOfCategories && listOfCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* {selectedCategory && (
        <Link href={`/getjob/${selectedCategory}`}
          className="text-blue-500 hover:underline ml-2">
            View jobs for {selectedCategory}
          
        </Link>
      )} */}
      <FilterJob searchParams={{ region: selectedCategory }} />
    </div>
  );
}

export default CategoryDropdown;
