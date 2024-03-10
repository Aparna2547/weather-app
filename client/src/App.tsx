import { useState } from 'react'
import './App.css'
import Weather from './components/Weather'


function App() {

  return (
    <div className='flex justify-center items-center h-screen bg-gray-500'>
      <Weather/>
    </div>
  )
}

export default App
