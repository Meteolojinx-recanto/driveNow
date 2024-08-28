'use client';
import React, { useState } from 'react';
import Select from './select';
import Box from './box';
import { CiLocationOn } from "react-icons/ci";
import { BiCar } from "react-icons/bi";
import { PiGasCan } from "react-icons/pi";
import { FaCircle } from "react-icons/fa6";

const Filtres = () => {
  const city = ['Шымкент'];

  const carBrands = {
    Toyota: ['Camry', 'Corolla', 'RAV4'],
    Honda: ['Civic', 'Accord', 'CR-V'],
    Ford: ['Focus', 'Mustang', 'Explorer'],
  };
  const colors = {
    Белый: 'white',
    Красный: 'red',
    Черный: 'black',
    Синий: 'blue',
  };
  const fuel = ['Бензин', 'Дизель'];

  const [selectedBrand, setSelectedBrand] = useState('');
  const [models, setModels] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setModels(carBrands[brand] || []);
  };

  const handleColorChange = (color) => {
    setSelectedColor(colors[color]);
  };

  return (
    <aside className='grid grid-cols-1 w-1/4'>
      <div className='flex flex-col items-center'>
        <h2 className='font-medium text-lg'>Фильтры</h2>
      </div>
      <hr className='my-4 border-t border-gray-300 w-full' />

      <button className='ml-auto text-sm text-blue-500 mb-4'>Сбросить фильтр</button>

      <section className='flex flex-col items-center space-y-2 ml-2'>
        <Select arr={city} icon={<CiLocationOn />} placeHolder='Выберите город' />
        <Select arr={Object.keys(carBrands)} selectedHandler={handleBrandChange} icon={<BiCar />} placeHolder='Выберите марку' />
        <Select arr={models} icon={<BiCar />} placeHolder='Выберите модель' />
      </section>
      <Box />
      <section className='flex flex-col items-center space-y-2 ml-2 mt-2'>
        <Select arr={fuel} icon={<PiGasCan />} placeHolder='Выберите двигатель' />
        <Select arr={Object.keys(colors)} selectedHandler={handleColorChange} icon={<FaCircle color={selectedColor}/>} placeHolder='Выберите цвет' />
      </section>
    </aside>
  );
};

export default Filtres;
