import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import AddHotel from './Pages/AddHotel'
import { useAppContext } from './context/AppContext'

const App = () => {
  const { isLoggedIn } =useAppContext();
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
      <Route path='/register' 
        element={
          <Layout>
            <Register/> 
          </Layout>  
        }/>
        <Route path='/sign-in' 
          element={
            <Layout>
              <SignIn /> 
            </Layout>  
          }/>
        {isLoggedIn && (
          <>
            <Route 
              path='/add-hotels'
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
          </>
        )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // </Router>
  );
}

export default App
