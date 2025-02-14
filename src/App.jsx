import React from 'react'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
            <Sidebar />
      </div>
    </div>
  )
}

export default App