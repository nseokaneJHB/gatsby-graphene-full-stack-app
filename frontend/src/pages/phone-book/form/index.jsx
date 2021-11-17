import React from 'react';

// Components
import { LayoutComponent } from '../../../components/LayoutComponent';
import { ContactFormComponent } from '../../../components/phone-book/ContactFormComponent';

// Styling
import { phonebook__section } from '../../../styles/phonebook.module.scss';

// Gatsby
import { Link } from 'gatsby';

// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export default function ContactForm() {

	const client = new ApolloClient({
		uri: 'http://127.0.0.1:8000/phonebook/graphql/',
		cache: new InMemoryCache(),
	})

	return (
		<ApolloProvider client={client}>
			<LayoutComponent>
				<section className={ phonebook__section }>
					<h1 className="h1 text-center">Contact</h1>
					<div className="container w-1001 d-flex justify-content-center justify-content-sm-start">
						<Link to="/phone-book" className="btn btn-outline-info btn-sm">Back Home</Link>
					</div>
					<ContactFormComponent />
				</section>
			</LayoutComponent>
		</ApolloProvider>
	)
}
