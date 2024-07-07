import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
    <h1 className='text-center font-bold font-sans'>Counter App</h1>
     <Counter />
    </>
  )
}

export default App
