import React from "react";

//include images into your bundl
//create your first component
const Card = () => {
	return (
		<div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
			<img
				src="http://via.placeholder.com/640x360
"
				className="img-fluid"
				alt="Responsive image"
			/>
			<div className="card-body">
				<div style={{ textAlign: "center" }}>
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
				</div>
			</div>
			<div
				style={{
					padding: "20px",
					textAlign: "center",
					background: "#DCDCDC",
				}}>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;
