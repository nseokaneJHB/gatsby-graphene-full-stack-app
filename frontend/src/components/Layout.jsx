import React from 'react';

// Components
import { Navbar } from './Navbar';

// Styling
import '../styles/global.scss';

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const Layout = ({ children }) => {

	const client = new ApolloClient({
		uri: "http://127.0.0.1:8000/todo/graphql/",
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<Navbar />
			<div className="layout">
				<div className="container-fluid">
					{ children }
				</div>
			</div>
			<footer className="footer">
				<p>Copyright &copy; 2021</p>
			</footer>
		</ApolloProvider>
	)
}
