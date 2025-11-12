import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      {!isOwnerPath && <NavBar />}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App