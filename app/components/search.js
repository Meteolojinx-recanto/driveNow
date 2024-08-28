import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ searchHandler, placeholder }) => {
  const handleInputChange = (event) => {
    const query = event.target.value;
    searchHandler(query);
  };

  return (
    <div className="flex items-center bg-white  p-2 h-9 w-1/5 m-4 rounded-full">
      <BiSearchAlt className="mr-2" size={28} color='black'/>
      <input
        type="text"
        placeholder={placeholder ?? 'Поиск ...'}
        onChange={handleInputChange}
        className="outline-none bg-white text-black w-full text-xs"
      />
    </div>
  );
};

export default Search;
