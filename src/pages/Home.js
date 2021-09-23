import React from "react";
import { Button } from "react-bootstrap";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			increment: 0,
		};
		this.changeColorPalette = this.changeColorPalette.bind(this);
	}
	changeColorPalette() {
		let { increment } = this.state;
		console.log("increment1", increment);
		console.log("changing color palette");
		let navibarColors = ["black", "red", "blue"];
		console.log("this", this);
		document.getElementById("navibar").style.backgroundColor =
			navibarColors[increment];
		console.log("increment2", increment);

		this.setState({ increment: increment + 1 });

		console.log("increment3", increment);
		if (increment >= 2) {
			this.setState({ increment: 0 });
		}
	}

	render() {
		const { changeColorPalette } = this;
		return (
			<div>
				<div>Home</div>
				<Button onClick={() => changeColorPalette()}>hello </Button>
			</div>
		);
	}
}

export default Home;
