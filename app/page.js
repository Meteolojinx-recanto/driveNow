'use client';
import { useState } from 'react';
import Filtres from './components/filtres/filtres';
import Search from './components/search';
import ActiveFiltersBar from './components/filtres/active_filters_bar';
export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const clearFiltres = () => setSelectedFilters({});
  const clearFilter = (key) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };

  return (
    <main className='flex '>
      <Filtres setSelectedFilters={setSelectedFilters} clearFiltres={clearFiltres} selectedFilters={selectedFilters} />
      <div className='flex w-1/2 h-20 fixed top-23 left-[386px] right-0'>
        <Search placeholder='Ищите авто по названиям' />
        <ActiveFiltersBar selectedFilters={selectedFilters} clearFilter={clearFilter} />
      </div>
    </main>
  );
}
