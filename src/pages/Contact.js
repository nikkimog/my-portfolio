import React from "react";

class Contact extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center  py-4 px-5">get in touch</h1>
				<div className="contactGrid w-50 mx-auto pt-2">
					<div className="mx-2 text-center">
						<a href="mailto:nicolerosemogensen@gmail.com">
							<i className="fa fa-envelope-open fa-3x"></i>
							<div className="mt-2">nicolerosemogensen at gmail dot com</div>
						</a>
					</div>
					<div className="mx-2 text-center">
						<a href="https://www.linkedin.com/in/nikkimogensen/">
							<i className="fa fa-linkedin fa-3x"></i>
							<div className="mt-2">nikkimogensen</div>
						</a>
					</div>
					<div className="mx-2 text-center">
						<a href="https://www.github.com/nikkimog">
							<i className="fa fa-github fa-3x"></i>
							<div className="mt-2">@nikkimog</div>
						</a>
					</div>
					<div className="mx-2 text-center">
						<a href="https://twitter.com/nikkimog">
							<i class="fa fa-twitter fa-3x"></i>
							<div className="mt-2">@nikkimog</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
