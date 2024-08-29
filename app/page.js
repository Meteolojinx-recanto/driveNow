'use client';
import { useState } from 'react';
import Filtres from './components/filtres/filtres';
import Search from './components/search';
import ActiveFiltersBar from './components/filtres/active_filters_bar';
import CarList from './cars/cars';
const cars = [
  {
    name: 'Mercedes Benz S Class W-2',
    image: '/assets/car.jpg',
    door: 4,
    fuel: 'Бензин',
    transmission: 'Автомат',
    cost: '90.000',
    city: 'Шымкент',
    color: 'Черный',
  },
  {
    name: 'Honda Civic',
    image: '/assets/car.jpg',
    door: 4,
    fuel: 'Бензин',
    transmission: 'Механика',
    cost: '85.000',
    city: 'Шымкент',
    color: 'Белый',
  },
  {
    name: 'Ford Mustang',
    image: '/assets/car.jpg',
    door: 4,
    fuel: 'Дизель',
    transmission: 'Автомат',
    cost: '88.000',
    city: 'Шымкент',
    color: 'Синий',
  },
  {
    name: 'Toyota Camry',
    image: '/assets/car.jpg',
    door: 4,
    fuel: 'Бензин',
    transmission: 'Механика',
    cost: '75.000',
    city: 'Шымкент',
    color: 'Красный',
  },
  {
    name: 'Toyota RAV4',
    image: '/assets/car.jpg',
    door: 4,
    fuel: 'Бензин',
    transmission: 'Автомат',
    cost: '95.000',
    city: 'Шымкент',
    color: 'Красный',
  },
];
export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  console.log(selectedFilters);
  const clearFiltres = () => setSelectedFilters({});
  const searchHandler = (query) => {
    setSearchQuery(query);
  };
  const clearFilter = (key) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };
  const filteredCars = cars.filter((car) => {
    return (
      (!selectedFilters.city || car.city === selectedFilters.city) &&
      (!selectedFilters.brand || car.name.includes(selectedFilters.brand)) &&
      (!selectedFilters.model || car.name.includes(selectedFilters.model)) &&
      (!selectedFilters.color || car.color.includes(selectedFilters.color)) &&
      // (!selectedFilters.transmission || car.transmission.includes(selectedFilters.transmission)) &&
      (!searchQuery || car.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <main className='flex '>
      <Filtres setSelectedFilters={setSelectedFilters} clearFiltres={clearFiltres} selectedFilters={selectedFilters} />
      <div className='flex w-1/2 h-20 fixed top-23 left-[386px] right-0'>
        <Search searchHandler={searchHandler} placeholder='Ищите авто по названиям' />
        <ActiveFiltersBar selectedFilters={selectedFilters} clearFilter={clearFilter} />
      </div>
      <section className='mx-10 my-20'>
        <CarList cars={filteredCars} />
      </section>
    </main>
  );
}
