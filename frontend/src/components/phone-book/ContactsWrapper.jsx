import React, { useState, useEffect } from 'react';

// Components
import { ContactSearchForm } from './ContactSearchForm';
import { ContactComponent } from './ContactComponent';

// Styling
import { contacts__section, contacts__wrapper } from '../../styles/phonebook.module.scss';

// Apollo
import { useQuery } from '@apollo/client';

// Queries
import { GetAllContacts_MUTATION } from '../../queries/phonebook_queries';

export const ContactsWrapper = () => {

	const { loading, data } = useQuery(GetAllContacts_MUTATION);

	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		!loading && data.contacts.length && data.contacts.length > 0 && setContacts([ ...data.contacts ]);
	}, [loading, data])

	return (
		<>
			<ContactSearchForm myContacts={ !loading && data.contacts.length && data.contacts.length > 0 && data.contacts } setMyContacts={ setContacts } />
			<section className={ contacts__section }>
				<div className={ contacts__wrapper }>
					{
						contacts.length && contacts.length > 0 ? contacts.map(contact => 
							<ContactComponent key={ contact.id } contact={ contact } />	
						)
						:
						<p className="font-monospace text-uppercase">You Don't Have Contacts Yet</p>
					}
				</div>
			</section>
		</>
	)
}
