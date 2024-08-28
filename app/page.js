'use client'
import { useState } from 'react';
import Filtres from './components/filtres/filtres';
import Search from './components/search';
export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const clearFiltres = () => setSelectedFilters({})

  return (
    <main className='flex'>
      <Filtres setSelectedFilters={setSelectedFilters} clearFiltres={clearFiltres} selectedFilters={selectedFilters} />
      {/* <section className='flex flex-row p-4'> */}
        <Search placeholder='Ищите авто по названиям'/>
      {/* </section> */}
    </main>
  );
}
