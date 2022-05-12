import React from "react";
import Navbar from "./navbar.jsx";
import Jummbo from "./ Jummbo.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Jummbo></Jummbo>
			<div>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
