import React from "react";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { SiApollographql, SiBootstrap, SiCss3, SiCypress, SiGithub, SiHasura, SiHtml5, SiJavascript, SiJest, SiMaterialui, SiNestjs, SiNuxtdotjs, SiPostgresql, SiReact, SiSequelize, SiVuedotjs, SiWebpack } from "react-icons/si"
import { SiRedux } from "react-icons/si";

const IconDiv = ({icon, name}) => {
	return(
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '6px'}}>
			{icon}
			{name}
			</div>

	)
}


class Projects extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center py-4">projects</h1>
					{/* <div style={{display: 'flex'}}> */}

				<div style={{ display: 'flex', flexDirection: 'row', width: '80%', margin: '10px auto', justifyContent: 'space-around'}}>
				<div style={{display: 'flex', width: '30%', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>built with</div>
				<div style={{ display: 'flex', flexDirection: 'row', maxWidth: '40%', flexWrap: 'wrap', justifyContent: 'center'}}>
				<IconDiv icon={<SiReact />} name="react"/>
				<IconDiv icon={<SiRedux />} name="redux"/>
				<IconDiv icon={<SiVuedotjs />} name="vue.js"/>
				<IconDiv icon={<SiBootstrap />} name="bootstrap"/>
				<IconDiv icon={<SiWebpack />} name="webpack"/>
				<IconDiv icon={<SiMaterialui />} name="MUI"/>
				<IconDiv icon={<SiJest />} name="jest"/>
				<IconDiv icon={<SiPostgresql />} name="postgres"/>
				<IconDiv icon={<SiHtml5 />} name="HTML5"/>
				<IconDiv icon={<SiJavascript />} name="javascript"/>
				<IconDiv icon={<SiCss3 />} name="CSS3"/>
				<IconDiv icon={<SiNuxtdotjs />} name="nuxt.js"/>
				<IconDiv icon={<SiSequelize />} name="sequelize"/>
				<IconDiv icon={<SiGithub />} name="github"/>
				</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', width: '80%', margin: '0 auto', justifyContent: 'space-around'}}>
				<div style={{display: 'flex', width: '30%', textAlign: 'center'}}>other technologies I've used not displayed here</div>
				<div style={{ display: 'flex', flexDirection: 'row'}}>
				<IconDiv icon={<SiApollographql />} name="apollo graphql"/>
				<IconDiv icon={<SiHasura />} name="hasura"/>
				<IconDiv icon={<SiNestjs />} name="nest.js"/>
				<IconDiv icon={<SiCypress />} name="cypress"/>
				</div>
				</div>
				{/* </div> */}
				<div class="projectsGrid pb-5">
				<div>
						<a href="https://hkbhuntsville.com/">Heritage Kitchen and Bath</a>
						<ul>
							<li className="font-weight-bold">
								An example of one of the many websites I helped design or redesign to improve online sales and user experience for shopping at small to medium sized businesses.
							</li>
							<li>
								Built with Vue.js and Vuex state management with a PHP backend.
							</li>
							<li>Dropdown navigation bar leads user to expert search and shopping experience including filtering, sorting, and elastic search.</li>
						</ul>
					</div>
					<div>
						<img
							className="w-100"
							src="../../assets/hkbhuntsville.png"
							alt="heritage kitchen and bath website"
						></img>
					</div>
					<div>
						<a href="https://thefixtureexchange.com/">The Fixture Exchange</a>
						<ul>
							<li className="font-weight-bold">
								Another website built to improve customer experience of browsing and purchasing through the site.
							</li>
							<li>
								Built with Vue.js and Vuex state management with a PHP backend.
							</li>
							<li>Wishlist capabilities connected to external webapp which provides a seamless purchasing experience.</li>
						</ul>
					</div>
					<div>
						<img
							className="w-100"
							src="../../assets/thefixtureexchange.png"
							alt="the fixture exchange website"
						></img>
					</div>
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
				</div>
			</div>
		);
	}
}

export default Projects;
