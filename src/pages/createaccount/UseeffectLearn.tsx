

import { useEffect, useState } from 'react';

export default function UseeffectLearn() {
    // const arr = [
    //     "/building-bg.png",
    //     "/climbing-bg.png",
    //     "/Learning-bg.png"
    // ];
    // const write = ["Testing", "Another Test", "Final Test"];

    const mutAr = {
        "pictures" :[
            "/Learning-bg.png",
            "/building-bg.png",
            "/climbing-bg.png",
            
        ],
        "write": [
            "Testing",
            "Another Test",
            "Final Test"
        ]
    }
    
    const [indexval, setIndexval] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexval(prev => (prev + 1) % mutAr.pictures.length);
        }, 3000);

        return () => clearInterval(interval); // cleanup
    }, []); // run once when component mounts

    return (
        <div>
            <img src={mutAr.pictures[indexval]} alt="Learning" />
            <p>{mutAr.write[indexval]}</p>
            <div className="flex space-x-2 mt-8">
                {mutAr.write.map((j, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full border-1 border-red-500 ${indexval === i && 'bg-red-500'}`}/>
                ))}
            </div>
        </div>
    )
}
``