import React from 'react';

import { Link } from 'gatsby';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark sticky-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Apps</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav me-auto">
						<Link className="nav-link" aria-current="page" to="/">Home</Link>
					</div>

					<div className="navbar-nav ml-auto">
						<Link className="nav-link" to="/todo">TODO</Link>
						<Link className="nav-link" to="/blog">BLOG</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
