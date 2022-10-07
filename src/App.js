import About from "./components/About";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/content/:id" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
