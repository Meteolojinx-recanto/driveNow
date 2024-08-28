'use client';
import React, { useState } from 'react';
import Sedan from './icons/sedan';
import Universal from './icons/universal';
import Cabriolet from './icons/cabriolet';
import Suv from './icons/suv';
import Cupe from './icons/cupe';
import Hatchback from './icons/hatchback';
import PickUp from './icons/pickup';
import { GiGearStickPattern } from 'react-icons/gi';

const Box = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

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
    { title: 'Автомат', icon: GiGearStickPattern },
    { title: 'Механика', icon: GiGearStickPattern },
  ];

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className='grid grid-cols-3 ml-2'>
      <div className='col-span-3 p-2'>Кузов</div>
      {body.map((b, index) => (
        <BoxItem index={index} selectedIndex={selectedIndex} handleClick={handleClick} b={b} />
      ))}
      <div className='col-span-3 p-2'>Коробка передач</div>
      {transmission.map((t, index) => (
        <BoxItem index={index} selectedIndex={selectedIndex} handleClick={handleClick} b={t} />
      ))}
    </div>
  );
};

export default Box;

const BoxItem = ({ index, selectedIndex, handleClick, b }) => {
  return (
    <div
      key={index}
      className={`py-4 cursor-pointer ${
        selectedIndex === index ? 'bg-[#2CA9BC]' : 'bg-white'
      } border border-gray-400 rounded-lg m-1 flex flex-col items-center space-y-2`}
      onClick={() => handleClick(index)}
    >
      <b.icon selected={selectedIndex === index} />
      <p className={`text-xs ${selectedIndex === index ? 'text-white' : 'text-black'}`}>{b.title}</p>
    </div>
  );
};
