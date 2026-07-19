import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";


function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return (
    <div className='about-page'>
      <h2>About Page</h2>;
      <p>Hello! I'm Tanish, a Bechelor 0of Computer Science (BCA) student with a strong passion for Software development, computer architecture, and exploring how things work under the hood.</p>
      <p>I enjoy into core computer science topics like object-oriented porgramming and operating system. When i am not writing code or studying, I am usually keeping up with the latest smpartpohone technology, experimenting with AI images generation, or following the Chennai Super Kings</p>
    </div>
  )
}

function Contact() {
  return <h2>Contact Page</h2>;
}



const Header = () => {
  return (
    <Router>
      <div className='header'>
        <h1>Tanish Rajput</h1>
        <ul className="head-menu">
          <Link to="/">Home</Link>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  )
}

export default Header;