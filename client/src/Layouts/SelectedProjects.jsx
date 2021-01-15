import React from "react";
import ProjectCard from "../Components/ProjectCard";
import thumbnail from "./../Images/smartmockups_kjsxj2gn.jpg";
import thumbnail2 from "./../Images/smartmockups_kjl9ctu4.jpg";
import thumbnail3 from "./../Images/smartmockups_kjswsjez.jpg";

function SelectedProjects() {
	return (
		<div className="selected-projects-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col">
						<p className="hero-sub-heading">Selected Projects</p>
						<h1 className="hero-heading mb-5">Case studies</h1>
					</div>
				</div>
				<div className="row mb-5">
					<ProjectCard
						key="1"
						thumbnail={thumbnail}
						title="Attendance - A simple MERN stack web app to take and manage online class attendance"
						projectBadge1="Node JS"
						projectBadge2="React JS"
						projectBadge3="Mongo DB"
						description="Attendance is a Simple web application to take students online class attendance's and manage attendance. The website Has authentication system, (CRUD) operation and responsive design

"
					/>
					<ProjectCard
						key="2"
						thumbnail={thumbnail2}
						title="Lunitech - a web development service providers website created with WordPress and Elementor"
						projectBadge1="WrodPress"
						projectBadge2="Elementor"
						projectBadge3="PHP"
						description="Lunitech is a software development service provider company. Their website was created in order to serve its customer by providing valuable information about software development. This website was developed using WordPress and Elementor"
					/>
					<ProjectCard
						key="3"
						thumbnail={thumbnail3}
						title="Wall Arts - A simple web app to download wallpapers as per your choice"
						projectBadge1="Node JS"
						projectBadge2="EJS"
						projectBadge3="Mongo DB"
						description="Wall Arts is a simple web site created for wallpaper lovers. It has great sorting system to sort wall paper as per your choice. This website is created with Node JS, Bootstrap and EJS as client side"
					/>
				</div>
			</div>
		</div>
	);
}

export default SelectedProjects;
