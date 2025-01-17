import { BrowserRouter, Route, Routes } from 'react-router'

//pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
   <BrowserRouter>
   <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sobre" element={<Sobre />} />
         <Route path="/contato" element={<Contato />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
