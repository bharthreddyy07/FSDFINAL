import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Layout from './Layout.jsx'
import BHome from './components/brforelogin/bhome.jsx'
import Home from './components/home/home.jsx'
import Course from './components/courses/course.jsx'
import Profile from './components/profile/profile.jsx'
import LoginPage from './components/login/login.jsx'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import SignUpPage from './components/signup/signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<BHome />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />

      <Route path="/home" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/profile" element={<Profile />} />
    </>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)