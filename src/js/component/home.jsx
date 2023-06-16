import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./NavBar.jsx";
import Card from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
