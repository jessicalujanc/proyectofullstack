import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/layout/Header';
import Carousel from './componentes/layout/Carousel'
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ComunidadPage from './pages/ComunidadPage';
import ContactoPage from './pages/ContactoPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
      </style>
    <Header></Header>
    <BrowserRouter>
    <Carousel></Carousel>
    <Nav></Nav>
    <Routes>
      <Route path='/src/pages/HomePage' element={<HomePage></HomePage>}></Route>
      <Route path='/src/pages/NosotrosPage' element={<NosotrosPage></NosotrosPage>}></Route>
      <Route path='/src/pages/ComunidadPage' element={<ComunidadPage></ComunidadPage>}></Route>
      <Route path='/src/pages/ContactoPage' element={<ContactoPage></ContactoPage>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
