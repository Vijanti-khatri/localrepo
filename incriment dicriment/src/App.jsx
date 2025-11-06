import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      
      <h3 className="text-4xl font-extrabold text-gray-800 mb-8 rounded-lg bg-white p-4 shadow-lg">
        Number is: {num}
      </h3>

      <div className="flex space-x-6">
{}
        <button
          onClick={() => setNum(num + 1)}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Increment
        </button>

        
        <button
          onClick={() => setNum(num - 1)} 
          className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
