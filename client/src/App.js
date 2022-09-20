import React from 'react'
import Home from './Container/Home/Home'
import Header from './Components/Navbar/Header'
import { Slide, ToastContainer } from "react-toastify"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path={"/"} element={
            <>
              <Header />
              <Home />
            </>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
