import { Fragment, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "./../Components/NavBar";
import axios from "axios";
import portrait from "./../Images/contact-portrait.JPG";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css/animate.min.css";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [loading, setLoading] = useState(false);

	function submitHandler(event) {
		event.preventDefault();
		setLoading(true);

		axios
			.post("/api/messages", {
				name,
				email,
				message,
			})
			.then((res) => {
				setName("");
				setEmail("");
				setMessage("");
				setLoading(false);
				showAlert({
					title: "Success",
					message: "Message Sent Successfully",
					version: "success",
				});
			})
			.catch((error) => {
				setLoading(false);
				showAlert({
					title: "Error!",
					message: error.message,
					version: "danger",
				});
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
			<div className="container text-center mt-5 mb-5 ">
				<div className="container contact-section">
					<div className="row">
						<div className="col-sm-6 text-center mt-4 mb-4">
							<img className="mb-4 avatar" src={portrait} alt="avatar" />

							<h2 className="name">Omer Fahad</h2>
							<p className="hero-sub-heading">
								Hey, are you reading my bio again?
							</p>
							<p className="hero-sub-heading">info@omerfahad.com</p>

							<ul className="social-icons">
								<li>
									<a
										className="facebook"
										href="https://www.facebook.com/omerbinfahad/"
									>
										<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a
										className="twitter"
										href="https://twitter.com/omerbinfahad"
									>
										<i className="fa fa-twitter"></i>
									</a>
								</li>
								<li>
									<a className="dribbble" href="https://dribbble.com/omerfahad">
										<i className="fa fa-dribbble"></i>
									</a>
								</li>
								<li>
									<a
										className="linkedin"
										href="https://www.instagram.com/omerbinfahad/"
									>
										<i className="fa fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6 mt-5 contact-form-column ">
							<div className="contact-form-box mt-2">
								<form className="contact-form" onSubmit={submitHandler}>
									<h6 className="contact-form-heading">
										Send me a message
										<br />
										<br />
									</h6>
									<div className="row form-group">
										<div className="col">
											<input
												maxLength="100"
												type="text"
												className="form-control m-2"
												placeholder="Full name"
												value={name}
												required
												onChange={(event) => {
													setName(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											<input
												type="email"
												className="form-control m-2"
												placeholder="Email"
												value={email}
												maxLength="100"
												required
												onChange={(event) => {
													setEmail(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											<textarea
												type="text"
												className="m-2 form-control"
												placeholder="Whats your curse?"
												value={message}
												required
												maxLength="500"
												onChange={(event) => {
													setMessage(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col">
											{loading ? (
												<div className="d-grid gap-2 form-control">
													<button
														className="btn btn-dark text-center  m-2"
														type="button"
														disabled
													>
														<i className="fas fa-paper-plane"></i> Sending...
													</button>
												</div>
											) : (
												<div className="d-grid gap-2">
													<button
														className="btn btn-dark text-center m-2 form-control"
														type="submit"
													>
														<i className="fas fa-paper-plane"></i> send
													</button>
												</div>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default Contact;
