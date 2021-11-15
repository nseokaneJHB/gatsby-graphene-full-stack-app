import React from 'react';

// Components
import { AppsComponent } from './AppsComponent';

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const AppsWrapper = () => {
	
	const client = new ApolloClient({
		uri: "http://127.0.0.1:8000/apps/graphql/",
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<AppsComponent />
		</ApolloProvider>
	)
}
