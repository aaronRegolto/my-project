import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

  const Home = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;
  const Contact = () => <h2>Contact</h2>;

function App() {

return (
<BrowserRouter>
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</BrowserRouter>
  )
}

export default App;




