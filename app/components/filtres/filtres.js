'use client';
import React, { useState } from 'react';
import Select from './select';
import Box from './box';
import { CiLocationOn } from 'react-icons/ci';
import { BiCar } from 'react-icons/bi';
import { PiGasCan } from 'react-icons/pi';
import { FaCircle } from 'react-icons/fa6';
import Sedan from './icons/sedan';
import Universal from './icons/universal';
import Cabriolet from './icons/cabriolet';
import Suv from './icons/suv';
import Cupe from './icons/cupe';
import Hatchback from './icons/hatchback';
import PickUp from './icons/pickup';
import GearCase from './icons/gear_case';

const Filtres = ({ setSelectedFilters, clearFiltres, selectedFilters }) => {
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
  const body = [
    { title: 'Седан', icon: Sedan },
    { title: 'Универсал', icon: Universal },
    { title: 'Кабриолет', icon: Cabriolet },
    { title: 'Купе', icon: Cupe },
    { title: 'Внедорожник', icon: Suv },
    { title: 'Хэчбек', icon: Hatchback },
    { title: 'Пикап', icon: PickUp },
  ];

  const transmission = [
    { title: 'Автомат', icon: GearCase },
    { title: 'Механика', icon: GearCase },
  ];

  const [models, setModels] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBodyIndex, setSelectedBodyIndex] = useState(null);
  const [selectedTransmissionIndex, setSelectedTransmissionIndex] = useState(null);

  const handleChange = (key, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));

    if (key === 'brand') {
      setModels(carBrands[value] || []);
    }

    if (key === 'color') {
      setSelectedColor(colors[value]);
    }
    if (key === 'body') {
      setSelectedBodyIndex(value);
    }

    if (key === 'transmission') {
      setSelectedTransmissionIndex(value);
    }
  };
  const handleClearFilters = () => {
    clearFiltres();
    setSelectedBodyIndex(null);
    setSelectedTransmissionIndex(null);
    setSelectedColor('');
    setModels([]);
  };

  return (
    <aside className='grid grid-cols-1 w-96 bg-white rounded-b-lg pb-4'>
      <div className='flex flex-col items-center'>
        <h2 className='font-medium text-lg'>Фильтры</h2>
      </div>
      <hr className='my-4 border-t border-gray-300 w-full' />
      <button onClick={() => handleClearFilters()} className='ml-auto text-sm text-blue-500 mb-4 pr-5'>
        Сбросить фильтр
      </button>
      <section className='flex flex-col items-center space-y-2 ml-2 pr-3'>
        <Select
          arr={city}
          icon={<CiLocationOn />}
          placeHolder='Выберите город'
          selectedHandler={(value) => handleChange('city', value)}
          resetTrigger={!Object.keys(selectedFilters).length}
        />
        <Select
          arr={Object.keys(carBrands)}
          selectedHandler={(value) => handleChange('brand', value)}
          icon={<BiCar />}
          placeHolder='Выберите марку'
          resetTrigger={!Object.keys(selectedFilters).length}
        />
        <Select
          arr={models}
          icon={<BiCar />}
          placeHolder='Выберите модель'
          selectedHandler={(value) => handleChange('model', value)}
          resetTrigger={!Object.keys(selectedFilters).length}
        />
      </section>
      <Box
        body={body}
        transmission={transmission}
        selectedBodyIndex={selectedBodyIndex}
        selectedTransmissionIndex={selectedTransmissionIndex}
        handleClickOnBody={(index) => handleChange('body', index)}
        handleClickOnTransmission={(index) => handleChange('transmission', index)}
      />{' '}
      <section className='flex flex-col items-center space-y-2 ml-2 mt-2 pr-5'>
        <Select
          arr={fuel}
          icon={<PiGasCan />}
          placeHolder='Выберите двигатель'
          selectedHandler={(value) => handleChange('fuel', value)}
          resetTrigger={!Object.keys(selectedFilters).length}
        />
        <Select
          arr={Object.keys(colors)}
          selectedHandler={(value) => handleChange('color', value)}
          icon={<FaCircle color={selectedColor} />}
          placeHolder='Выберите цвет'
          resetTrigger={!Object.keys(selectedFilters).length}
        />
      </section>
    </aside>
  );
};

export default Filtres;
