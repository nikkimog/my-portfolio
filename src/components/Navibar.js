import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React from "react";

class Navibar extends React.Component {
	render() {
		return (
			<Navbar id="navibar" expand="lg">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link to="/">Home</Link>
							<Link to="/linda">Linda</Link>
							<Nav.Link href="#linda">linda</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Navibar;
