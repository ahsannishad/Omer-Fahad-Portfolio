import React, { Fragment } from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Layouts/Hero";
import SubHero from "./../Layouts/SubHero";
import Expertise from "./../Layouts/Expertise";
import Introduction from "./../Layouts/Introduction";
import SelectedProject from "./../Layouts/SelectedProjects";
import Footer from "../Components/Footer";
import WorkTogether from "../Layouts/WorkTogether";
function Home() {
	return (
		<Fragment>
			<NavBar />
			<Hero />
			<Introduction />
			<Expertise />
			<SubHero />
			<SelectedProject />
			<WorkTogether />
			<Footer />
		</Fragment>
	);
}

export default Home;
