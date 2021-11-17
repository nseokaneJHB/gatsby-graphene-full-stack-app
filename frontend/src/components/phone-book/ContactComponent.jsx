import React from 'react';

// Styling
import { contact__wrapper, contact__name__phone, contact__name, contact__phone, contact__actions } from '../../styles/phonebook.module.scss';

// Gatsby
import { Link } from 'gatsby';

// Apollo
import { useMutation } from '@apollo/client';

// Queries
import { GetAllContacts_MUTATION, DeleteContact_MUTATION } from '../../queries/phonebook_queries';

export const ContactComponent = ({ contact }) => {

	const [ DeleteContact ] = useMutation(DeleteContact_MUTATION, {
		refetchQueries: [
			GetAllContacts_MUTATION,
		]
	});

	const deleteMyTask = (e) => {
		DeleteContact({ variables: { slug: e.slug }});
	};

	return (
		<div className={ `card` }>
			<div className={ contact__wrapper }>
				<Link to={ `/phone-book/${ contact.slug }` } role="button" className={ `contact ${ contact__name__phone }` }>
					<small className={ contact__name }>{ contact.name }</small>
					<small className={ contact__phone }><strong>Phone:</strong> +27{ contact.phone }</small>
				</Link>
				<div className={ contact__actions }>
					<button type='button' className="btn btn-outline-danger btn-sm" onClick={ () => deleteMyTask(contact) }>
						<svg width="14" height="14" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
							<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
						</svg>
					</button>
					<button type='button' className="btn btn-outline-warning btn-sm">
						<svg width="14" height="14" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
