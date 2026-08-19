import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        
      </Routes>
    </>
  );
};

export default App;