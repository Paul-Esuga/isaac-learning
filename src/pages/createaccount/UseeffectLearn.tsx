


// export default function UseeffectLearn() {
//     // const arr = [
//     //     "/building-bg.png",
//     //     "/climbing-bg.png",
//     //     "/Learning-bg.png"
//     // ];
//     // const write = ["Testing", "Another Test", "Final Test"];

//     const mutAr = {
//         "pictures" :[
//             "/Learning-bg.png",
//             "/building-bg.png",
//             "/climbing-bg.png",
            
//         ],
//         "write": [
//             "Testing",
//             "Another Test",
//             "Final Test"
//         ]
//     }
    
//     const [indexval, setIndexval] = useState(0);
    

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndexval(prev => (prev + 1) % mutAr.pictures.length);
//         }, 3000);

//         return () => clearInterval(interval); // cleanup
//     }, []); // run once when component mounts

//     return (
//         <div>
//             <img src={mutAr.pictures[indexval]} alt="Learning" />
//             <p>{mutAr.write[indexval]}</p>
//             <div className="flex space-x-2 mt-8">
//                 {mutAr.write.map((j, i) => (
//                     <div key={i} className={`w-3 h-3 rounded-full border-1 border-red-500 ${indexval === i && 'bg-red-500'}`}/>
//                 ))}
//             </div>
//         </div>
//     )
// }
// ``

import { useState } from "react";
import { countriesCode } from "./countries";

export default function UseeffectLearn() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  function toggleDropdown() {
    setOpen(prev => !prev);
  }

  function handleOptionClick(option: string) {
    setSelected(option);
    setOpen(false);
  }

  return (
    <div className="relative w-64 ml-20 mt-20">
      <button
        className="w-full bg-red-600 text-white px-3 py-2 rounded-lg"
        onClick={toggleDropdown}
      >
        {selected ? selected : "Select country"}
      </button>

      {open && (
        <div className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-white border rounded-lg shadow-lg flex flex-col">
          {countriesCode.map(country => (
            <button
              key={country.code}
              className="px-3 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
              onClick={() =>
                handleOptionClick(
                  `${country.flag} ${country.name} (${country.dial_code})`
                )
              }
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="text-gray-500">{country.dial_code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
