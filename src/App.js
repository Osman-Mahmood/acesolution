import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";
import Footer from "./components/Footer/Footer";
import ReadMore from "./pages/ReadMore";
import LearnMore from "./pages/LearnMore";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pt-5"></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Blogs" element={<Blogs />} />
          <Route exact path="/Career" element={<Career />} />
          <Route exact path="/Services/:ReadMore" element={<ReadMore />} />
          <Route exact path="/:LearnMore" element={<LearnMore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
