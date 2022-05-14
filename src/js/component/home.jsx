import React from "react";
import Navbar from "./navbar.jsx";
import Jummbo from "./ Jummbo.jsx";
import Card from "./card.jsx";
import Footer from "./Footer.jsx";

let Fstyle = {
	backgroundColor: "#696969",
	color: "white",
	textAlign: "center",
	marginTop: "10px",
	width: "100%",
};
const Home = () => {
	return (
		<div
			className="d-flex flex-column justify-content-between"
			style={{ height: "100vh" }}>
			<div>
				<Navbar />
				<div className="container">
					<div style={{ backgroundColor: "#A9A9A9" }}>
						<Jummbo />
					</div>
					<div>
						<div className="row">
							<div className="clo-xs-12 col-md-6 col-lg-3">
								<Card />
							</div>
							<div className="clo-xs-12 col-md-6 col-lg-3">
								<Card />
							</div>
							<div className="clo-xs-12 col-md-6 col-lg-3">
								<Card />
							</div>
							<div className="clo-xs-12 col-md-6 col-lg-3">
								<Card />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={Fstyle} className="d-flex flex-column">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
