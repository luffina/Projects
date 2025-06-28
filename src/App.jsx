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
import TopBar from './components/TopBar';
import Testimonials from './components/Testimonials';
import AmcOlympiad from './components/Special/AmcOlympiad';
import IcasPrep from './components/Special/ICASPrep';
import NaplanPrep from './components/Special/NaplanPrep';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import Curriculum from './components/Special/Curriculam';
import SealProgram from './components/Courses/SealProgram';
import SelectivePrep from './components/Courses/SelectivePrep';
import Review from './components/Review';
import Method from './components/Special/method';
import Centres from './components/Centres';
import Signup from './pages/Signup';
import Chatbot from './components/Chatbot';
import StripeWrapper from './pages/Payment/StripeWrapper';
// Wrapper to conditionally show Navbar
function LayoutWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/dashboard']; // Add more paths if needed

  return (
    <>
      <TopBar />
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
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/amc-olympiad" element={<AmcOlympiad />} />
        <Route path="/special/icas" element={<IcasPrep />} />
        <Route path="/special/naplan" element={<NaplanPrep />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/courses/seal-program" element={<SealProgram />} />
        <Route path="/courses/selective-prep" element={<SelectivePrep />} />
        <Route path="/review" element={<Review />} />
        <Route path="/method" element={<Method />} />
        <Route path="/centres" element={<Centres />} />
          <Route path="/curriculum/:year" element={<Curriculum />} />
        <Route path="/signup" element={<Signup />} />
<Route path="/chatbot" element={<Chatbot />} />
        <Route path="/payment" element={<StripeWrapper />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
}
