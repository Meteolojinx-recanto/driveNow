import Link from 'next/link';
import DoorIcon from './icon/door';
import TransmissionIcon from './icon/transmission';
import { PiGasCan } from 'react-icons/pi';

const Car = ({ car }) => {
  return (
    <div className='max-w-sm bg-white  rounded-lg shadow-lg'>
      <Link href='#'>
        <img className='rounded-t-lg' src={car.image} alt='car' />
      </Link>
      <div className='p-4'>
        <h5 className='mb-4 text-lg font-semibold text-gray-900'>{car.name}</h5>
        <div className='flex items-center mb-2'>
          <DoorIcon className='mr-2 text-gray-500' />
          <p className='text-sm text-gray-500 mr-auto'>Двери</p>
          <div className='text-black font-semibold'>{car.door}</div>
        </div>
        <div className='flex items-center mb-2'>
          <PiGasCan color='#2CA9BC' className='mr-2 text-gray-500' />
          <p className='text-sm text-gray-500 mr-auto'>Топливо</p>
          <div className='text-black font-semibold'>{car.fuel}</div>
        </div>
        <div className='flex items-center mb-4'>
          <TransmissionIcon className='mr-2 text-gray-500' />
          <p className='text-sm text-gray-500 mr-auto'>КПП/АП</p>
          <div className='text-black font-semibold'>{car.transmission}</div>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold text-[#2CA9BC]'>{car.cost} ₸/день</span>
          <Link
            href='#'
            className='px-6 py-2 text-sm font-medium text-white bg-[#2CA9BC] rounded-full hover:bg-[#228695]'
          >
            Детально
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;
