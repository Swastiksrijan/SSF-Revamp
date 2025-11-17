import React from 'react'
import Header from './components/Header'
import Getinvolved from './components/GetInvolved'

const App = () => {
  return (
    <div className='min-h-screen w-screen flex justify-start flex-col items-center'>
      <Header/>
      {/* make home page component and mount here */}
      <Getinvolved></Getinvolved>
    </div>
  )
}

export default App