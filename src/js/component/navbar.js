import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
	const history = useHistory();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<button className="navbar-toggler" onClick={() => history.push("/")}>
					Home
				</button>
				<button className="navbar-toggler" onClick={() => history.push("/demo")}>
					Page 1
				</button>
				<button className="navbar-toggler" onClick={() => history.push("/page2")}>
					Page 2
				</button>
				<Link to="/demo">
					<button className="navbar-toggler">Page 1</button>
				</Link>
				<Link to="/page2">
					<button className="navbar-toggler">Page 2</button>
				</Link>
				<Link to="/page3">
					<button className="navbar-toggler">Page 3</button>
				</Link>
			</div>
		</nav>
	);
};
