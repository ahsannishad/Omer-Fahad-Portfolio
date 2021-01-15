import axios from "axios";
import React, { useState } from "react";
import envelope from "./../Images/orange-opened-envelope-letter-mail-27.png";

function WorkTogether() {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [loading, setLoading] = useState(false);

	function submit(event) {
		event.preventDefault();
		setLoading(true);

		axios
			.post("/api/subscribe", { name, number })
			.then((res) => {
				setLoading(false);
				setNumber("");
				setName("");
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}

	return (
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

									<div class="col">
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
								<div class="row m-3">
									<div class="col">
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
									<div class="col ">
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
												<i className="fas fa-paper-plane"></i> Subscrib
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
	);
}

export default WorkTogether;
