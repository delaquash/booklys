import React from 'react'
import { Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>}/>
        <Route path='/search' element="/" />
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    // </Router>
    
  )
}

export default App
