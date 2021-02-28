import React, {useEffect, useState,useRef} from 'react'

function UseRef() {
    const [count, setCount] = useState(0)
    const intervalId = useRef(null)
    console.log('rendering...',count);

    const startCounter = () =>{
        intervalId.current = setInterval( ()=> setCount( count => count + 1),1000)
        console.log(`start intervalId : ${intervalId.current}`);
    }

    const stopCounter = () => { 
        clearInterval(intervalId)
        console.log(`stop intervalId: ${intervalId.current}`);
    }

    return(
        <>
            <p>counter : {count}</p>
            <button onClick={startCounter}>start</button>
            <button onClick={stopCounter}>stop</button>
        </>
    )

  }

export default UseRef;