import React from 'react';

// Components
import { LayoutComponent } from '../../components/LayoutComponent';
import { ContactsWrapper } from '../../components/phone-book/ContactsWrapper';

// Styles
import { phonebook__section } from '../../styles/phonebook.module.scss';

// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const PhoneBookPage = () => {

	const client = new ApolloClient({
		uri: 'http://127.0.0.1:8000/phonebook/graphql/',
		cache: new InMemoryCache(),
	})

	return (
		<ApolloProvider client={client}>
			<LayoutComponent>
				<section className={ phonebook__section }>
					<h1 className="h1 text-center">Phone Book App</h1>
					<ContactsWrapper />
				</section>
			</LayoutComponent>
		</ApolloProvider>
	)
}

export default PhoneBookPage;

