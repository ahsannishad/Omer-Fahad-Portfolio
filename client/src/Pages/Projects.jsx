import React, { Fragment } from "react";
import SelectedProject from "./../Layouts/SelectedProjects.jsx";
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

function Projects() {
	return (
		<Fragment>
			<NavBar />
			<SelectedProject />
			<Footer />
		</Fragment>
	);
}

export default Projects;
