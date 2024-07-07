import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color , setColor] = useState("black");
  const [headingColor , setHeadingColor] = useState("white");

  return (
    <div 
    className='w-full h-screen overflow-auto'
    style={{ backgroundColor: color }}
>
    <h1 className='text-center font-bold text-3xl my-10'
    style={{
      color : headingColor,
    }}>
        Background Color Changer 
    </h1>

    <div className='fixed flex flex-wrap bottom-11 inset-x-0 justify-center'>
        <div className='flex flex-wrap p-2 bg-white rounded-2xl gap-3'> 
          <button className='px-3 py-1 rounded-3xl bg-red-500 shadow-2xl' 
          onClick={() => {
            setColor("red");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}
          >
            Red
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-blue-700 shadow-2xl' 
          onClick={() => {
            setColor("blue");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Blue
          </button>
          <button className='px-3 py-1 rounded-3xl bg-black text-white shadow-2xl' 
          onClick={() => {
            setColor("black");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Black
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-indigo-700 shadow-2xl' 
          onClick={() => {
            setColor("indigo");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Indigo
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-violet-600 shadow-2xl' 
          onClick={() => {
            setColor("violet");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Violet
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-yellow-500 shadow-2xl' 
          onClick={() => {
            setColor("yellow");
            if(headingColor === 'white'){
              setHeadingColor("black")
            }
          }}>
            Yellow
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-green-700 shadow-2xl' 
          onClick={() => {
            setColor("green");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Green
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-purple-700 shadow-2xl' 
          onClick={() => {
            setColor("purple");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Purple
          </button>
          <button className='px-3 py-1 rounded-3xl  text-white bg-gray-500 shadow-2xl'
          onClick={() => {
            setColor("gray");
            if(headingColor === 'black'){
              setHeadingColor("white")
            }
          }}>
            Gray
          </button>
          <button className='px-3 py-1 rounded-3xl text-black shadow-2xl'
          onClick={() => {
            setColor("white");
            if(headingColor === 'white'){
              setHeadingColor("black");
            }
          }}>
            white
          </button>
        </div>
    </div>
</div>


  )
}

export default App
