// import { useState } from 'react';

// export function UseeffectLearn() {
//   const [value, setValue] = useState("");

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setValue(e.target.value);
//   }

//   return (
//     <div>
//       <h1>{value}</h1>
//       <input type="text" value={value} onChange={handleChange} className='border-2 border-blue-500 bg-red-700' />
//     </div>
//   );
// }
import { useState } from "react";

export function UseeffectLearn() {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value); // store the actual text
  }

  return (
    <div className="p-4">
      <h1 className="mb-2 text-xl">Length: {value.length < 8 ? "password should be atleast 8 characters": `password is ${value.length}`}</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border-2 border-blue-500 bg-white text-black p-2 rounded w-64"
        placeholder="Type something..."
      />
    </div>
  );
}
