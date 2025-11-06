import React from 'react';

const App = () => {
  return (
    <>
     
      <nav className='bg-emerald-950 flex py-5 px-10 items-center justify-between text-white'>
        <h2 className='text-3xl font-bold'>FOOD WEB</h2>
        <div className='hidden md:flex gap-10 items-center'>
         
          <h4 className='text-xl hover:text-emerald-300 cursor-pointer transition-colors duration-300'>About</h4>
          <h4 className='text-xl hover:text-emerald-300 cursor-pointer transition-colors duration-300'>Contact</h4>
          <h4 className='text-xl hover:text-emerald-300 cursor-pointer transition-colors duration-300'>Services</h4>
          <h4 className='text-xl hover:text-emerald-300 cursor-pointer transition-colors duration-300'>Your Account</h4>
        </div>
        <div className="md:hidden text-3xl cursor-pointer">
            
        </div>
      </nav>
       <main className="p-10 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mt-20">Welcome to Food Web!</h1>
        <p className="text-lg text-gray-600 mt-4">Your ultimate destination for delicious food.</p>
       
      </main>
    </>
  );
};

export default App;
