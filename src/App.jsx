import './App.css';
import Home from './components/pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/pages/contact';
import Pemesanan from './components/pages/pemesanan';
import Category from './components/pages/category';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/Contact" element={<Contact />}/> 
      <Route path="/Pemesanan" element={<Pemesanan />}/> 
      <Route path="/Category" element={<Category />}/> 
    </Routes>
    </BrowserRouter>
  )
}

 export default App;