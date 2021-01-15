import React from "react";
import subHeroImg from "./../Images/smartmockups_kjwlnzbh.png";

function Introduction() {
	return (
		<div className="sub-hero-section">
			<div className="container mt-5 text-start">
				<div className="row">
					<div className="col-lg-6 section-image  text-end">
						<img width="100%" src={subHeroImg} alt="sub hero preview" />
					</div>
					<div className="col-lg-6  section-texts">
						<h1 className="hero-heading">
							Talk is cheap,
							<br /> Show me The code!
						</h1>
						<p className="hero-sub-heading">
							I usually work on several projects but I’ll be happy to discuss
							new opportunities. Let’s get in touch!
						</p>
						{/* <p className="hero-sub-heading">
							Good UI design will give your potential c ustomers confidence in
							your company and your brand.It help your website rank.
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Introduction;
