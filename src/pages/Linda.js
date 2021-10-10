import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import think from '../../public/assets/'

class Linda extends Component {
	render() {
		return (
			<div className="carouselOfLinda">
				<h1 className="text-center pt-4"> linda</h1>
				<p>
					Like everyone else, my partner and I got a puppy during the pandemic.
					Her name is Linda, and here are some cute photos of her!
				</p>
				<Carousel>
					<div>
						<img src="../../assets/linda5.png" />
						<p className="legend">
							Linda visiting Lake Santeetlah in the mountains of NC
						</p>
					</div>
					<div>
						<img src="../../assets/linda2.png" />
						<p className="legend">Linda just showing a perfect smile</p>
					</div>
					<div>
						<img src="../../assets/linda3.png" />
						<p className="legend">The day we picked out Linda!</p>
					</div>
					<div>
						<img src="../../assets/linda4.png" />
						<p className="legend">
							Linda with her namesake, cheese fries from Linda's Bar and Grille
						</p>
					</div>
				</Carousel>
			</div>
		);
	}
}

// ReactDOM.render(<Linda />, document.querySelector(".demo-carousel"));

// ReactDOM.render(<Linda />, document.querySelector(".demo-carousel"));
export default Linda;
