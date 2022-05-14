import React from "react";

//include images into your bundl
//create your first component
const Jummbo = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4" style={{ padding: "20px" }}>
				<strong>A Warm Welcome</strong>
			</h1>
			<p
				className="lead"
				style={{ padding: "20px", marginBottom: "0", marginTop: "0" }}>
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>

			<p
				className="lead"
				style={{
					padding: "10px",
					paddingTop: "0",
					paddingBottom: "80px",
				}}>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
};

export default Jummbo;
