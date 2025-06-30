// Home.jsx
import React from 'react';
import Hero from './Hero';
import Features from './Features';
import About from './AboutSection';
import Courses from './Courses';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Courses />
      <Testimonials />
    </>
  );
}
