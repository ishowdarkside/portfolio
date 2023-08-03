import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import { About } from "./Pages/About";

import Projects from "./Pages/Projects";
import Navbar from "./ui/Navbar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
