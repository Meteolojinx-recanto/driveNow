const Box = ({ selectedBodyIndex, handleClickOnBody, selectedTransmissionIndex, handleClickOnTransmission, body, transmission }) => {
  return (
    <div className='grid grid-cols-3 ml-2'>
      <div className='col-span-3 p-2'>Кузов</div>
      {body.map((b, index) => (
        <BoxItem 
          key={index} 
          index={index} 
          selectedIndex={selectedBodyIndex} 
          handleClick={handleClickOnBody} 
          b={b} 
        />
      ))}
      <div className='col-span-3 p-2'>Коробка передач</div>
      {transmission.map((t, index) => (
        <BoxItem 
          key={index} 
          index={index} 
          selectedIndex={selectedTransmissionIndex} 
          handleClick={handleClickOnTransmission} 
          b={t} 
        />
      ))}
    </div>
  );
};

export default Box;

const BoxItem = ({ index, selectedIndex, handleClick, b }) => {
  return (
    <div
      className={`py-4 mr-5 cursor-pointer ${
        selectedIndex === index ? 'bg-[#2CA9BC]' : 'bg-white'
      } border border-gray-400 rounded-lg m-1 flex flex-col items-center space-y-2`}
      onClick={() => handleClick(index)}
    >
      <b.icon selected={selectedIndex === index} />
      <p className={`text-xs ${selectedIndex === index ? 'text-white' : 'text-black'}`}>{b.title}</p>
    </div>
  );
};
