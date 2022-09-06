// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import timelineElements from "./timelineElements";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
// import React from "sass";
import React from "react";

class AboutMe extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center py-4">about me</h1>
				<div className="w-75 mx-auto">
					<div className="aboutMeParagraph">
						I am a former physical therapist who realized that, although I loved
						helping patients problem solve through their mobility issues, my
						passion was more suited towards developing technology to solve a
						variety of society's and life's problems. I made my career switch
						about a year ago and feel affirmed every day by the excitement and
						drive I get through developing clean, resuable, functional, and
						readable code. Outside of work, I enjoy hanging out with my puppy
						(see <Link to="/linda">Linda</Link>
						for more), rock climbing, reading memoirs, and traveling. Scroll
						down for a timeline of some important work and school events in my
						journey.
					</div>
					<div>
						<span className="font-italic">Frontend</span> - Javascript, React, Apollo Client and GraphQL
						Redux, Vue, Vuex, Bootstrap, Material UI, HTML, CSS, SEO principles
					</div>
					<div className="mb-5">
						<span className="font-italic">Backend</span> - Nest.js, NodeJS, Express,
						MySQL, PostgreSQL, Sequelize, Hasura
					</div>
				</div>
				{/* <h1 className="title">timeline</h1> */}
				<VerticalTimeline className="timeline">
					{timelineElements.map((element) => {
						return (
							<VerticalTimelineElement
								key={element.key}
								date={element.date}
								dateClassName="date"
								icon={
									element.icon === "faDesktop" ? (
										<FontAwesomeIcon icon={faDesktop} />
									) : (
										<FontAwesomeIcon icon={faBook} />
									)
								}
								iconStyle={{ background: "rgb(100, 100, 100)", color: "#fff" }}
							>
								<h3 className="vertical-timeline-element-title titleElement">
									{element.title}
								</h3>
								<h4>{element.organization}</h4>
								<h5 className="font-italic">{element.location}</h5>
								<ul>
									{element.description.map((element) => {
										return <li className="listElement">{element}</li>;
									})}
								</ul>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		);
	}
}

export default AboutMe;
