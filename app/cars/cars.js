import Car from "./car/car";
const CarList = ({cars}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cars.map((car, index) => (
        <Car key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;