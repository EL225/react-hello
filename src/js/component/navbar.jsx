import React from "react";

//include images into your bundl
//create your first component
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Start Bootsrap
					</a>
					<div>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Service
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
