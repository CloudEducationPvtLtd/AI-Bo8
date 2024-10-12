import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Carrer from "./pages/Carrer.jsx";
import Events from "./componets/Events.jsx";
import Gallery from "./componets/Gallery.jsx";
import Blog from "./componets/Blog.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Brochure from "./pages/Brochure.jsx";
import Labsetup from "./pages/Labsetup.jsx";
import Media from "./pages/Media.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/labsetup" element={<Labsetup />} />
        {/* Uncomment the next line to handle undefined routes */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
