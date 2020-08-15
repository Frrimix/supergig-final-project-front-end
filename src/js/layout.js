import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

{
	/* Importing views*/
}
import { Home } from "./views/home";
import { CreateAccount } from "./views/createAccount";
import injectContext from "./store/appContext";

{
	/* Importing components*/
}
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* The route below takes you to the homepage */}
						<Route exact path="/">
							<Home />
						</Route>
						{/* The route below takes you to create account */}
						<Route exact path="/create-account">
							<CreateAccount />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
