import React, { useState } from 'react';

// Styling
import '../../styles/global.scss';
import { phonebook__form, phonebook__form__content } from '../../styles/phonebook.module.scss';

// Gatsby
import { Link } from 'gatsby';

export const ContactSearchForm = ({ myContacts, setMyContacts }) => {

	const [search, setSearch] = useState("");

	const SearchContactsByName = async(e) => {
		e.preventDefault();
		setMyContacts(myContacts.filter(contact => contact.name.toLowerCase().match(search.toLowerCase())));
	}

	return (
		<div className={ phonebook__form }>
			<div className={ phonebook__form__content }>
				<form className="row g-2 w-100 d-flex justify-content-center" onSubmit={ (e) => SearchContactsByName(e) }>
					<div className="col-8 col-sm-10">
						<input type="text" className="form-control form-control-sm" placeholder="Search name" value={ search } onChange={ (e) => setSearch(e.target.value) } />
					</div>
					<div className="col-4 col-sm-2">
						<button type="submit" className="btn btn-success btn-sm w-100">Search</button>
					</div>
				</form>

				<Link to="/phone-book/form" type="button" className="btn btn-sm btn-info btn__float" title="Add New Contact">
					<svg width="36" height="36" className="bi bi-plus-lg" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
					</svg>
				</Link>
			</div>
		</div>
	)
}
