import React from "react";
import portrait from "./../Images/Portrait.png";

function Hero() {
	return (
		<div className="hero-section text-center">
			<div className="container mt-5 text-start">
				<div className="row desktop">
					<div className="col-lg-6 hero-text">
						<p className="introduction">Meet</p>
						<h1 className="hero-heading-text">
							Fahad,
							<br /> Developer from Dhaka, Bangladesh
						</h1>
						<p className="hero-sub-heading">
							Over the past 2 years, as an art director and designer, I’ve
							worked with big companies and up-and-coming startups to
							successfully help them reach their full potential and attract new
							customers.
						</p>
						<p className="sub-introduction mt-4">
							<a className="sub-introduction-link" href="/projects">
								View Projects
							</a>{" "}
							or{" "}
							<a className="sub-introduction-link" href="/contact">
								Contact
							</a>
						</p>
					</div>
					<div className="col-lg-6 hero-image tex-end">
						<img
							width="100%"
							className="portrait"
							src={portrait}
							alt="portrait of Omer Fahad"
						/>
					</div>
				</div>
				<div className="row mobile">
					<div className="col-lg-6 hero-image">
						<img
							width="100%"
							className="portrait"
							src={portrait}
							alt="portrait of Omer Fahad"
						/>
					</div>
					<div className="col-lg-6 hero-text">
						<p className="introduction">Meet</p>
						<h1 className="hero-heading">
							Fahad, <br /> Developer from Dhaka, Bangladesh
						</h1>
						<p className="hero-sub-heading">
							Over the past 2 years, as an art director and designer, I’ve
							worked with big companies and up-and-coming startups to
							successfully help them reach their full potential and attract new
							customers.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
