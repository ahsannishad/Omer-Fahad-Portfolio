import React from "react";
import ExpertiseImg from "./../Images/smartmockups_kjwlywxc.png";

function Expertise() {
	return (
		<div className="expertise-section">
			<div className="container mt-5 text-start">
				<div className="row">
					<div className="col-lg-6 section-texts">
						<p className="introduction">I am expert in</p>
						<h1 className="hero-heading">Web design & Development</h1>
						<p className="hero-sub-heading">
							I build websites and applications with the latest technologies.
							And I create Modern, fast, mobile first website design and UX
							delivered through research, planning and best practices.
						</p>
					</div>
					<div className="col-lg-6 mt-4 section-image text-end">
						<img width="100%" src={ExpertiseImg} alt="expertise preview" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Expertise;
