import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="text-green-950 text-xl">
      <Nav />

      <main className="h-[60vh]">jewellery-ecommerce-website</main>
      <Footer />
    </div>
  );
};

export default App;
