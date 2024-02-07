import React from 'react'
import { Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './Pages/Register'

const App = () => {
  return (
    // <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }
      />
      <Route path='/register' element={<Register/> }/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // </Router>
  );
}

export default App
