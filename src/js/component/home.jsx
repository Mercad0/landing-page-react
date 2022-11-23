import React from "react";
import Jumbotron from "./Jumbotron.jsx"
import Navbar from "./NavBar.jsx";
import Card from "./Cards.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
    <Navbar />
		<Jumbotron />
    <div className="d-flex flex-wrap m-5 justify-content-around">
    <Card />
		</div>
    <Footer />
		</>
	);
};

export default Home;
