import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React from "react";

class Navibar extends React.Component {
	constructor() {
		super();
		this.state = {
			increment: 0,
		};
		this.changeColorPalette = this.changeColorPalette.bind(this);
	}
	changeColorPalette() {
		let { increment } = this.state;
		let navibarColors = ["#736372", "#2E4057", "#D5775D", "#4A5759"];
		let appColors = ["#DBD3C9", "#F1E8B8", "#FAC9B8", "#B0C4B1"];
		let navibarButtonColors = ["#D4CDF4", "#505A5B", "#C6A15B", "#989898"];
		let navibarButtonText = ["gray", "white", "white", "white"];
		document.getElementById("navibar").style.backgroundColor =
			navibarColors[increment];
		document.getElementById("app").style.backgroundColor = appColors[increment];
		document.getElementById("navibar-button").style.backgroundColor =
			navibarButtonColors[increment];
		document.getElementById("navibar-button").style.color =
			navibarButtonText[increment];
		console.log("increment2", increment);

		this.setState({ increment: increment + 1 });

		console.log("increment3", increment);
		if (increment >= 3) {
			this.setState({ increment: 0 });
		}
	}
	render() {
		const { changeColorPalette } = this;
		return (
			<Navbar id="navibar" expand="lg">
				<Container>
					<Navbar.Brand href="/">Nikki Mogensen</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto navbarLinks">
							<Link to="/aboutme">About Me</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
							<Link to="/linda">Linda</Link>
						</Nav>
						<Button
							id="navibar-button"
							// variant="custom"
							onClick={() => changeColorPalette()}
						>
							change colors for a different vibe{" "}
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Navibar;
