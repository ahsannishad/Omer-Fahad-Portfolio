const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");

//Defining App
const app = express();

//Body persing Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

//mongoose connection
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((res) => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.log(error);
	});

//....................................Messages........................................//
const messagesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Messages = new mongoose.model("Messages", messagesSchema);

app
	.route("/api/messages")

	.post((req, res) => {
		const message = new Messages({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message,
		});

		message.save((error, success) => {
			if (error) {
				res.status(500).send("Internal server error while saving the message");
			} else {
				// Step 1
				let transporter = nodemailer.createTransport({
					service: "gmail",
					auth: {
						user: process.env.EMAIL,
						pass: process.env.PASSWORD,
					},
				});

				// Step 2
				let mailOptions = {
					from: process.env.EMAIL, // TODO: email sender
					to: req.body.email, // TODO: email receiver
					subject: "Thanks for your Message",
					text: `Dear, ${req.body.name} I am Omer Fahad from omerfahad.com. Thanks for sending the message. I received your message. I will contact you very soon.`,
				};

				// Step 3
				transporter.sendMail(mailOptions, (err, data) => {
					if (err) {
						console.log(err);
					} else {
						res.send("Message Sent Successfully!");
					}
				});
			}
		});
	});

//...................................Message section ends............................//

//..................................Subscribe with phone number.......................//

// //mongoose Schema
// const subscribersSchema = new mongoose.Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		phone: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	{ timestamps: true }
// );

// const Subscribers = new mongoose.model("Subscribers", subscribersSchema);

app.post("/api/subscribe", (req, res) => {
	try {
		// Step 1
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASSWORD,
			},
		});

		// Step 2
		let mailOptionsForAdmin = {
			from: process.env.EMAIL, // TODO: email sender
			to: process.env.ADMIN_EMAIL, // TODO: email receiver
			subject: `${req.body.name}, just subscribed to your website `,
			text: `Fahad, A new user named "${req.body.name}" just subscribed to your website send The user a welcome message or contact him/her soon. Here is the information of the user, Name: ${req.body.name}, Phone Number: ${req.body.number}, Email: ${req.body.email}`,
		};

		let mailOptionsForSubscribers = {
			from: process.env.EMAIL, // TODO: email sender
			to: req.body.email, // TODO: email receiver
			subject: "Thank You so much for subscribing omerfahad.com!",
			text: `Hey there, ${req.body.name}, This is Omer Fahad from omerfahad.com. I just wanted to personally thank you for using omerfahad.com and joining our community. We’re glad to have you! If you have any questions about development so far or For any inquiry please visit omerfahad.com/contact. Follow on facebook facebook.com/omerbinfahad. Don’t hesitate to reach out if you need any help! Have a good one! -Omer Fahad`,
		};

		// Step 3
		transporter.sendMail(mailOptionsForAdmin, (err, data) => {
			if (err) {
				console.log(err);
				res
					.status(500)
					.send("Something went wrong while Subscribing to omerfahad.com");
			} else {
				transporter.sendMail(mailOptionsForSubscribers);
				res.send("Subscribed");
			}
		});
	} catch (error) {
		console.log(error);
	}
});

//..................................Subscribe with phone number ends..................//

// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`App started at port ${port}`);
});
