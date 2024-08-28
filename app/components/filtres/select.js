'use client';
import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { SlArrowUp } from 'react-icons/sl';

const Select = ({ arr, selectedHandler, icon, placeHolder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    selectedHandler(option);
    setIsOpen(false);
  };

  return (
    <div className='relative w-full'>
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between bg-white border rounded-full p-1 cursor-pointer ${
          selected ? 'text-black' : 'text-gray-500',
          selected ? 'border-black' : 'border-[#EAEAEA]'
        }`}
      >
        <div className='flex items-center text-xs'>
          {icon && (
            <span className={`m-2 text-lg ${selected ? 'text-black' : 'text-gray-500'}`}>
              {icon}
            </span>
          )}
          <span>{selected || placeHolder}</span>
        </div>
        <span className='mr-2'>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
      </div>

      {isOpen && (
        <ul className='absolute left-0 w-full bg-[#EAEAEA] rounded-md mt-1 shadow-lg z-10'>
          {arr.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)} className='p-2 cursor-pointer hover:bg-gray-100'>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
