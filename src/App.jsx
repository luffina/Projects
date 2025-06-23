import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import EnrollNow from './pages/EnrollNow';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import About from './components/AboutSection';
import Login from './pages/Login';
import Dashboard from './OnLogin/Dashboard';
import Calendar from './OnLogin/Calender';

// Wrapper to conditionally show Navbar
function LayoutWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/dashboard']; // Add more paths if needed

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses showEnrollLinks={true} />} />
        <Route path="/enroll" element={<EnrollNow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calender" element={<Calendar />} />


      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
