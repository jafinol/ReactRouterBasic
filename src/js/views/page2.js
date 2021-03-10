import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import "../../styles/demo.scss";

export const Page2 = () => {
	const [login, setLogin] = useState({ username: "", password: "" });
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">Page 2</h1>
					<p>
						This is a template for a simple marketing or informational website. It includes a large callout
						called a jumbotron and three supporting pieces of content. Use it as a starting point to create
						something more unique.
					</p>
					<p>
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Learn more &raquo;
						</a>
					</p>
				</div>
			</div>

			<div className="container">
				<p>
					Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id
					ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
					condimentum nibh, ut fermentum massa justo sit amet risus.
				</p>
			</div>

			<div className="row">
				<div className="col-md-5">
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="basic-addon2"
							onChange={e => setLogin({ ...login, username: e.target.value })}
						/>
						<div className="input-group-append">
							<span className="input-group-text" id="basic-addon2">
								<i className="fas fa-user" />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-5">
					<div className="input-group mb-3">
						<input
							type="Password"
							className="form-control"
							placeholder="Password"
							aria-label=""
							aria-describedby="basic-addon2"
							onChange={e => setLogin({ ...login, password: e.target.value })}
						/>
						<div className="input-group-append">
							<span className="input-group-text" id="basic-addon2">
								<i className="fas fa-key" />
							</span>
						</div>
					</div>
				</div>
			</div>

			<button
				type="button"
				className="btn btn-primary"
				onClick={() => {
					actions.exampleFunction(login);
				}}>
				Login
			</button>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
