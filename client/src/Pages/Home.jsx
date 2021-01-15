import React, { Fragment, useState } from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Layouts/Hero";
import SubHero from "./../Layouts/SubHero";
import Expertise from "./../Layouts/Expertise";
import Introduction from "./../Layouts/Introduction";
import SelectedProject from "./../Layouts/SelectedProjects";
import Footer from "../Components/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";
import envelope from "./../Images/orange-opened-envelope-letter-mail-27.png";
import axios from "axios";

function Home() {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	function submit(event) {
		event.preventDefault();
		setLoading(true);

		axios
			.post("/api/subscribe", { name, email, number })
			.then((res) => {
				setLoading(false);
				setNumber("");
				setName("");
				setEmail("");
				showAlert({
					title: "Success",
					message: "Subscription successfull",
					version: "success",
				});
			})
			.catch((error) => {
				showAlert({
					title: "Error!",
					message: error.message,
					version: "danger",
				});
				setLoading(false);
			});
	}

	function showAlert(props) {
		store.addNotification({
			title: props.title,
			message: props.message,
			type: props.version,
			insert: "top",
			container: "top-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: false,
			},
		});
	}

	return (
		<Fragment>
			<ReactNotification />
			<NavBar />
			<Hero />
			<Introduction />
			<Expertise />
			<SubHero />
			<SelectedProject />
			<div className="work-together-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center">
							{/* <p className="introduction">NEED A DEVELOPER?</p>
						<h1 className="hero-heading">Let’s work together</h1> */}

							<img src={envelope} alt="subscribe envelope" />
						</div>
						<div className="col-md-6">
							<form className="row" onSubmit={submit}>
								<div className="container">
									<div className="row m-3">
										<h1 className="hero-heading text-center">SUBSCRIBE</h1>

										<p className="introduction text-center">
											Subscribe To Get Some Latest Update
										</p>

										<div className="col">
											<input
												type="text"
												className="form-control"
												id="name"
												value={name}
												placeholder="Full Name"
												onChange={(event) => setName(event.target.value)}
												required
											/>
										</div>
									</div>
									<div className="row m-3">
										<div className="col">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="Email"
												value={email}
												onChange={(event) => setEmail(event.target.value)}
												required
											/>
										</div>
									</div>
									<div className="row m-3">
										<div className="col">
											<input
												type="tel"
												className="form-control"
												id="number"
												placeholder="Phone Number"
												value={number}
												onChange={(event) => setNumber(event.target.value)}
												required
											/>
										</div>
									</div>

									<div className="row m-3 text-end">
										<div className="col ">
											{loading ? (
												<button
													type="submit"
													className="btn btn-warning mb-3 form-control"
													disabled
												>
													<i className="fas fa-paper-plane"></i> Subscribing...
												</button>
											) : (
												<button
													type="submit"
													className="btn btn-warning mb-3 form-control"
												>
													<i className="fas fa-paper-plane"></i> Subscribe
												</button>
											)}
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Home;
