import React from "react";
// import { Button } from "react-bootstrap";

class Projects extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center py-3">projects</h1>
				<div class="projectsGrid pb-5">
					<div>
						<a href="https://ratemy-landlord.herokuapp.com/">RateMyLandlord</a>
						<ul>
							<li className="font-weight-bold">
								Single page application allowing tenant's to view and review
								their landlords.
							</li>
							<li>
								Delivered aesthetically pleasing and mobile responsive front-end
								with React, Redux and Materialize.
							</li>
							<li>
								Introduced new technologies including web scraping with
								puppeteer and data visualizations created with Chart.js and
								other libraries.
							</li>
							<li>Integrated back-end data with use of RESTful API.</li>
							<li>
								Organized back-end achieved using express, sequelize, and
								PostgresSQL.
							</li>
						</ul>
					</div>
					<div>
						<iframe
							src="https://www.youtube.com/embed/8hLTW-f7zdo"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div>
						<a href="https://expo.dev/@nikkimog/pelvic-health-outcomes">
							Pelvic Health Outcomes
						</a>

						<ul>
							<li className="font-weight-bold">
								Mobile app built for improving patient experience filling out
								pelvic health outcome measures in a physical therapy office.
							</li>
							<li>React Native application built in four day stackathon.</li>
							<li>Authenticated users through firebase integration.</li>
						</ul>
					</div>
					<div>
						<iframe
							src="https://www.youtube.com/embed/e6xLg6Bm3Zs"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div>
						<a href="https://dictionary-vue-app.herokuapp.com/">QuickLookUp</a>
						<ul>
							<li className="font-weight-bold">
								Single page application for searching word definitions.
							</li>
							<li>
								Built with Vue.js, Vuex state management and Bootstrap for
								styling.
							</li>
							<li>Integrated with Merriam-Webster Dictionary API.</li>
						</ul>
					</div>
					<div>
						<img
							className="w-100"
							src="../../assets/vuedictionary.png"
							alt="vue dictionary app home page"
						></img>
					</div>
					<div>
						<a href="http://bubblysort.herokuapp.com">BubblySort</a>
						<ul>
							<li className="font-weight-bold">
								Mock e-commerce single page application selling setlzers.
							</li>
							<li>
								Customized front-end design with Bootstrap and Framer Motion
								with focus on mobile responsiveness.
							</li>
							<li>
								Node/Express, PostgresSQL and sequelize for back-end
								development.{" "}
							</li>
							<li>Testing built with Mocha.</li>
						</ul>
					</div>
					<div>
						<img
							src="../../assets/bubblysort.png"
							alt="home page of BubblySort website"
							className="w-100"
						></img>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
