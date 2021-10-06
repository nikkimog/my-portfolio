import React from "react";
// import { Button } from "react-bootstrap";

class Home extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		increment: 0,
	// 	};
	// 	this.changeColorPalette = this.changeColorPalette.bind(this);
	// }
	// changeColorPalette() {
	// 	let { increment } = this.state;
	// 	let navibarColors = ["#736372", "#2E4057", "#D5775D", "#4A5759"];
	// 	let appColors = ["#DBD3C9", "#F1E8B8", "#FAC9B8", "#B0C4B1"];
	// 	document.getElementById("navibar").style.backgroundColor =
	// 		navibarColors[increment];
	// 	document.getElementById("app").style.backgroundColor = appColors[increment];
	// 	console.log("increment2", increment);

	// 	this.setState({ increment: increment + 1 });

	// 	console.log("increment3", increment);
	// 	if (increment >= 3) {
	// 		this.setState({ increment: 0 });
	// 	}
	// }

	render() {
		// const { changeColorPalette } = this;
		return (
			<div className="homeContainer d-flex">
				<div className="innerContainer">
					<div className="leftText">
						<div>Hi Y'all!</div>
						<div>My name is Nikki Mogensen.</div>
						<div> I'm a fullstack developer.</div>

						<a
							className="downloadButton"
							href="path_to_file"
							download="nikki_mogensen_resume"
						>
							<i className="fa fa-download mr-2"></i>
							Download My Resume
						</a>
					</div>
					<div>
						<div className="card">
							<div className="imgBox">
								<img
									src="https://i.ibb.co/yk1bVts/Screen-Shot-2021-09-28-at-4-56-02-PM.png"
									alt="Nikki in front of city skyline"
									className="imgBox"
								></img>
							</div>
							<div className="details">
								<h2>Welcome to my Portfolio!</h2>
								<p>
									Thanks so much for stopping by! Check out more about me, some
									of my projects, my contact information, and even my new puppy
									linda by navigating through the links above. I love software
									development, and I'm glad you've found your way here!
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <Button
					className="changePaletteButton"
					variant="info"
					onClick={() => changeColorPalette()}
				>
					change colors for a different vibe{" "}
				</Button> */}
			</div>
		);
	}
}

export default Home;
