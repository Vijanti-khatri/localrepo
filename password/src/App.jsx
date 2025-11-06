import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false); 
  const [password, setPassword] = useState(''); 

  
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  
    if (numberAllowed) {
      str += '0123456789';
    }
    
    if (charAllowed) { 
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }


    for (let i = 0; i < length; i++) { // Loop from 0
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex); // Append character to the password
    }

    setPassword(pass); // Set the generated password
  }, [length, numberAllowed, charAllowed, setPassword]); // Dependencies for useCallback

  // useEffect hook to call passwordGenerator when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); // Add passwordGenerator as a dependency

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select(); // Select the text in the input field
      document.execCommand('copy'); // Copy the selected text to clipboard
      // Optional: Provide feedback to the user that the password has been copied
      // You could display a temporary message or change button text
      console.log('Password copied!');
    }
  }, [password]); // Dependency is password to ensure it's up-to-date

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center text-2xl mb-4'>Password Generator</h1> {/* Added text-2xl and mb-4 for styling */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-2 px-3 bg-gray-700 text-white' // Added bg-gray-700 and text-white for styling
          placeholder='Generated Password' // Changed placeholder text
          readOnly
          ref={passwordRef} // Assign the ref to the input field
        />
        <button
          onClick={copyPasswordToClipboard} // Add onClick handler for copying
          className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 hover:bg-blue-800 transition-colors duration-200' // Added hover effect
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2 flex-wrap'> {/* Added flex-wrap for responsiveness */}
        <div className='flex items-center gap-x-1 mb-2'> {/* Added mb-2 for spacing */}
          <input
            type='range'
            min={6}
            max={50} // Changed max to 50 for more reasonable lengths
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(parseInt(e.target.value)); }} // Parse value to integer
          />
          <label className='text-white'>Length: {length}</label> {/* Added text-white to label */}
        </div>
        <div className='flex items-center gap-x-1 mb-2'>
          <input
            type='checkbox'
            checked={numberAllowed} // Use 'checked' for controlled component
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className='form-checkbox h-4 w-4 text-blue-600 rounded' // Added form-checkbox styling
          />
          <label htmlFor='numberInput' className='text-white'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 mb-2'>
          <input
            type='checkbox'
            checked={charAllowed} // Corrected to charAllowed
            id='charactersInput'
            onChange={() => {
              setCharAllowed((prev) => !prev); // Corrected to setCharAllowed
            }}
            className='form-checkbox h-4 w-4 text-blue-600 rounded'
          />
          <label htmlFor='charactersInput' className='text-white'>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
