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
			<div className="homeContainer">
			<div className="innerContainer">
				<div className="leftText">
					<div>hi y'all!</div>
					<div>my name is Nikki Mogensen</div>
					<div> -- I'm a software engineer.</div>

					<a
						className="downloadButton"
						href="../../assets/mogensen_resume_2024.pdf"
						download="mogensen_resume_2024"
					>
						<i className="fa fa-download mr-2"></i>
						download my resume
					</a>
				</div>
				{/* <div className="rightSide"> */}
					{/* <div className="imageCard">
						<div className="imgBx"> */}
					{/* <img
						src="../../assets/nikki_stellenbosch.png"
						alt="Nikki in front of vineyard in Stellenbosch"
						className="imgBox"
					></img> */}
				</div>
				{/* <div className="details">
							<h2>welcome to my portfolio :)</h2>
							<p>
								Thanks so much for stopping by! Check out more about me, some of
								my projects, my contact information, and even my new puppy linda
								by navigating through the links above. I love software
								development, and I'm glad you've found your way here!
							</p>
						</div>
					</div>
				</div> */}
			{/* </div> */}
			</div>
		);
	}
}

export default Home;
