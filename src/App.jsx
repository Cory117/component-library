import React from 'react';
// import Menu from "./components/Menu/index"
import Nav from "./components/Nav/Nav"
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Badges />
      <Banners />
      <Cards />
      <Testimonials />
    </div>
  )
}
