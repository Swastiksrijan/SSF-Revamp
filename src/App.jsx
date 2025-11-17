import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Getinvolved from './components/GetInvolved'

const App = () => {
  return (
    <div className='min-h-screen w-full flex justify-start flex-col items-center font-inria px-2 overflow-x-hidden'>
      <Header/>
      <Home/>
      <Getinvolved/>
    </div>
  )
}

export default App