import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from './Components/Navbar'
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    
    

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
