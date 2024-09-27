import React from 'react';

// Sample car data
const cars = [
  {
    id: 1,
    name: 'Bugatti Chiron',
    image: '/icons/bugatti.jpg',
    description: 'A high-performance sports car with a luxurious interior.',
    price: '$3000/day'
  },
  {
    id: 2,
    name: 'Lamborghini Aventador',
    image: '/icons/TopGear - Tesla Model Y - 003.jpg',
    description: 'An iconic supercar with a powerful V12 engine.',
    price: '$2500/day'
  },
  {
    id: 3,
    name: 'Tesla Model S',
    image: '/icons/tesla.jpg',
    description: 'A fully electric luxury sedan with impressive range.',
    price: '$200/day'
  },
  // Add more car objects as needed
];

const CarStore = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Available Cars for Rent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-lg p-4 shadow-md">
            <img src={car.image} alt={car.name} className="rounded-md mb-2" />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-gray-600">{car.description}</p>
            <p className="text-lg font-bold mt-2">{car.price}</p>
            <button className="mt-4 bg-accent hover:bg-accent-hover text-white rounded px-4 py-2">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarStore;
