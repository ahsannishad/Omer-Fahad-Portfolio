import React from "react";
function ProjectCard(props) {
	return (
		<div className="col-lg-6 col-md-6 mb-4">
			<div className="card blog-card shadow">
				<img
					src={props.thumbnail}
					className="card-img-top blog-card-thumbnail"
					alt="thumbnail"
				/>
				<div className="card-body">
					<h4 className="card-title text-center blog-card-title">
						{props.title}
					</h4>
					<div className="blog-badge text-center">
						<span className="badge bg-primary m-2">{props.projectBadge1}</span>
						<span className="badge bg-primary m-2">{props.projectBadge2}</span>
						<span className="badge bg-primary m-2">{props.projectBadge3}</span>
					</div>

					<p className="card-text text-center blog-card-description">
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
