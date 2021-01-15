import React from "react";
import subHeroImg from "./../Images/smartmockups_kjwlstjx.png";

function SubHero() {
	return (
		<div className="sub-hero-section">
			<div className="container mt-5 text-start">
				<div className="row">
					<div className="col-lg-6 section-image  text-end">
						<img width="100%" src={subHeroImg} alt="sub hero preview" />
					</div>
					<div className="col-lg-6  section-texts">
						<p className="introduction">I create & work with</p>
						<h1 className="hero-heading">
							Responsive, optimised and mobile friendly design
						</h1>
						<p className="hero-sub-heading">
							Good UI design will give your potential customers confidence in
							your company and your brand.It help your website rank.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubHero;
