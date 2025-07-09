import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Artist from "../pages/Artist";
import Boutique from "../pages/Boutique";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ArtworkDetail from "../pages/ArtworkDetail";
import ArtistDetail from "../pages/ArtistDetail";
import Cart from "../pages/Cart";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/artist" element={<Artist />} />
    <Route path="/artist/:id" element={<ArtistDetail />} />
    <Route path="/artwork/:id" element={<ArtworkDetail />} />
    <Route path="/boutique" element={<Boutique />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
