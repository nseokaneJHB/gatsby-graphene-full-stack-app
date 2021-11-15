import React from 'react';

import { Link } from 'gatsby';
import { NavLinksComponent } from './NavLinksComponent';

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const NavbarComponent = () => {

	const client = new ApolloClient({
		uri: "http://127.0.0.1:8000/apps/graphql/",
		cache: new InMemoryCache(),
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-dark sticky-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Apps</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navigation">
					<div className="navbar-nav me-auto">
						<Link className="nav-link" aria-current="page" to="/">HOME</Link>
					</div>
					<ApolloProvider client={client}>
						<NavLinksComponent />
					</ApolloProvider>
				</div>
			</div>
		</nav>
	)
}
