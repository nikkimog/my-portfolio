import React from "react";
// import { Button } from "react-bootstrap";

class Projects extends React.Component {
	render() {
		return (
			<div>
				<div className="text-center">Some of my projects</div>
				<div class="projectsGrid">
					<div>
						<a href="https://ratemy-landlord.herokuapp.com/">RateMyLandlord</a>
					</div>
					<div>project 1</div>
					<div>Tech Stack Project 2</div>
					<div>project 2</div>
					<div>Tech Stack Project 3</div>
					<div> project 3</div>
					<div>Tech Stack Project 4</div>
					<div>project 4</div>
				</div>
			</div>
		);
	}
}

export default Projects;
