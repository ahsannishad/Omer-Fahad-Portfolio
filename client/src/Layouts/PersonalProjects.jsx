import React from "react";
import thumbnail from "./../Images/iceland-01.jpg";
import thumbnail2 from "./../Images/photography-01.jpg";
import thumbnail3 from "./../Images/drawing-01.jpg";
import ProjectCard from "./../Components/ProjectCard";

function PersonalProjects() {
	return (
		<div className="selected-projects-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col">
						<p className="hero-sub-heading">PHOTOGRAPHY & DRAWINGS</p>
						<h1 className="hero-heading">Personal projects</h1>
					</div>
				</div>
				<div className="row mb-5">
					<ProjectCard
						key="1"
						thumbnail={thumbnail}
						title="Iceland — landscapes & vistas"
						projectBadge1="Canon DSLR"
						projectBadge2="Landscape"
						projectBadge3="Photography"
						description="Over the course of several weeks I have witnessed the beauty and
						 the harshness of this unique volcanic island. From beautiful days and midnight 
						 sun to thick mist, heavy downpours and snowfalls. I visited most of the popular 
						 destinations and several hidden gems in the remote Highlands."
					/>
					<ProjectCard
						key="2"
						thumbnail={thumbnail2}
						title="Photography"
						projectBadge1="Photography"
						projectBadge2="Black and white"
						projectBadge3="Landscape"
						description="My favorite way to take a break from the screen is to get out on my motorbike,
						 preferably for days at a time, with my camera in tow. You can check out the photos and read
						  about these trips on my blog. And you can visit my Instagram account."
					/>
					<ProjectCard
						key="3"
						thumbnail={thumbnail3}
						title="Drawings"
						projectBadge1="Pencil Sketch"
						projectBadge2="Drawings"
						projectBadge3="Black and white"
						description="This is how I started my adventure with art. I’ve been interested in pencil drawings
						 for as long as I can remember, and as soon as I was able to hold a pencil in my hand, I drew. Over
						  time I’ve gone from coloring books to pencil drawings to my first graphic design commission."
					/>
				</div>
			</div>
		</div>
	);
}

export default PersonalProjects;
