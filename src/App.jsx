import { useState } from 'react'
import Form from './Form'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
function App() {

  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path ="signUp" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
