import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Page3 = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-3">Page 3</h1>
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

				<p>
					This is a template for a simple marketing or informational website. It includes a large callout
					called a jumbotron and three supporting pieces of content. Use it as a starting point to create
					something more unique.This is a template for a simple marketing or informational website. It
					includes a large callout called a jumbotron and three supporting pieces of content. Use it as a
					starting point to create something more unique.This is a template for a simple marketing or
					informational website. It includes a large callout called a jumbotron and three supporting pieces of
					content. Use it as a starting point to create something more unique.This is a template for a simple
					marketing or informational website. It includes a large callout called a jumbotron and three
					supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
			</div>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
