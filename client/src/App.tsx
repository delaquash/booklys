import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import AddHotel from './Pages/AddHotel';
import { useAppContext } from './context/AppContext';
import MyHotels from './Pages/MyHotels';
import EditHotel from './Pages/EditHotel';
import Search from './Pages/Search';
import Details from './Pages/Details';
import Booking from './Pages/Booking';

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
            <Search />
          </Layout>
        }
      />
      <Route 
        path="/detail/hotelId"
        element={
          <Layout>
            <Details />
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
            path='/hotel/booking/:hotelId'
            element={
              <Layout>
                <Booking />
              </Layout>
            }
          />
            <Route 
              path='/add-hotels'
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
            <Route 
              path='/edit-hotels/:hotelId'
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
            <Route 
              path='/my-hotels'
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
          </>
        )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
