import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Carreras from './components/Carreras/Carreras'
import Inicio from './components/Inicio/Inicio'
import Menu from './components/Menu/Menu'
import NotFound from './components/NotFound/NotFound'
import Noticias from './components/Noticias/Noticias'

const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route path='/Noticias' element={<Noticias/>}/>
        <Route path='/Carreras' element={<Carreras/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App