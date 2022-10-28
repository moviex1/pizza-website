import './AppStyles.css';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu/Menu';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import { useEffect } from 'react';
import axios from 'axios';


function App() {  
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<Navigate to="/home" replace/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
