

import { useEffect, useState } from 'react';
import PASSWORD from '../../../public/building-bg.png';
import SUCCESS_ICON from '../../../public/climbing-bg.png';
import BACKGROUND from '../../../public/Learning-bg.png';

export default function UseeffectLearn() {
    const arr = [PASSWORD, SUCCESS_ICON, BACKGROUND];
    const write = ["Testing", "Another Test", "Final Test"];
    
    const [indexval, setIndexval] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexval(prev => (prev + 1) % arr.length);
        }, 3000);

        return () => clearInterval(interval); // cleanup
    }, []); // run once when component mounts

    return (
        <div>
            <img src={arr[indexval]} alt="Learning" />
            <p>{write[indexval]}</p>
            <div className="flex space-x-2 mt-8">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 bg-opacity-50 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 bg-opacity-50 rounded-full"></div>
          </div>
        </div>
    )
}
