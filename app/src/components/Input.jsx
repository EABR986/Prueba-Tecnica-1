import React from 'react';
import { useState } from 'react';

const Input = () => {
  const [input, setInput] = useState('');

  console.log(input);
  return (
    <div className="flex justify-center my-5  ">
      <input
        type="text"
        placeholder="Search by Year"
        className="flex justify-center bg-gray-800 text-white rounded-md p-2 w-96"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
