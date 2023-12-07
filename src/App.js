import logo from './logo.svg';
import './App.css';
import {
  Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/service';
import Gallary from './components/Gallary';
import Contact from './components/Contact';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>



  );
}

export default App;
