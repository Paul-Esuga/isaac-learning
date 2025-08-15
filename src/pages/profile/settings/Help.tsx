// React Hooks
import { useState, useEffect } from 'react';

const Help = () => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    },[])

    return(
        <div className={`bg-yellow-200 h-screen w-screen z-[1000] absolute ${hasMounted ? "absolute top-0 left-0 pt-[24px]" : ""}`}>
            <h1 className='text-center text-[32px] font-[700]'>Help</h1>
        </div>
    )
}

export default Help;