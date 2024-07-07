import React, { useState } from 'react'

const Counter = () => {
    
    const [count , setCount] = useState(0);

    const addCounter = () => {
        setCount(count +1);
    }

    const reduceCounter = () => {
        if(count === 0){
            setCount(0);
        } else {
            setCount(count - 1);
        }
    }

  return (
    <>
        <div className='bg-gray-600 p-11 rounded-md mt-5 font-sans'>
            <h1 className='m-4'>Counter value : {count}</h1>
            <button className='mx-2'
                onClick={addCounter}>
                Increament
            </button>
            <button 
                onClick={reduceCounter}>
                Decreament
            </button>
        </div>
    </>
  )
}

export default Counter