import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreatedBooks from './pages/CreatedBooks.jsx'
import DeletedBooks from './pages/DeletedBooks.jsx'
import Editbook from './pages/Editbook.jsx'
import Home from './pages/Home.jsx'
import ShowBook from './pages/ShowBook.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreatedBooks/>}/>
        <Route path='/books/delete/:id' element={<DeletedBooks/>}/>
        <Route path='/books/edit/:id' element={<Editbook/>}/>
        <Route path='/books/shows/:id' element={<ShowBook/>}/>
      </Routes>
    </div>
  )
}

export default App

