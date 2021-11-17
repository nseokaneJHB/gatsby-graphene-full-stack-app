import React, { useState } from 'react';

// Styling
import { phonebook__contact__form__wrapper, phonebook__contact__form, phonebook__contact__form__fields } from '../../styles/phonebook.module.scss';

// Apollo
import { useMutation } from '@apollo/client';

// Queries
import { AddNewContact_MUTATION } from '../../queries/phonebook_queries';

// Gatsby
import { navigate } from 'gatsby';

// Utils
import { ConvertToTitleCase } from '../../utils/format';

export const ContactFormComponent = () => {

	const [personFirstName, setPersonFirstName] = useState("");
	const [personLastName, setPersonLastName] = useState("");
	const [personPhone, setPersonPhone] = useState("");
	const [personEmail, setPersonEmail] = useState("");

	const [ NewContact, { error } ] = useMutation(AddNewContact_MUTATION);

	const submitNewContact = (e) => {
		e.preventDefault();

		if (personFirstName.trim() === "" && personLastName.trim() === "") return window.alert("First name and Last name cannot both be blank");
		if (personPhone.trim() === "") return window.alert("Please provide a valid phone number");

		const personName = `${ personFirstName.trim() } ${ personLastName.trim() }`;

		if (error) return console.log(error);

		NewContact({ variables: {
			name: ConvertToTitleCase(personName).trim(),
			phone: personPhone.trim(),
			email: personEmail.trim(),
		}});

		setPersonFirstName("");
		setPersonLastName("");
		setPersonPhone("");
		setPersonEmail("");

		navigate('/phone-book');
	}

	return (
		<div className={ phonebook__contact__form__wrapper }>
			<form className={ phonebook__contact__form } onSubmit={ (e) => submitNewContact(e) }>
				<div className={ phonebook__contact__form__fields }>
					<div className="form-floating">
						<input type="text" id="first_name_id" className="form-control" placeholder="First Name..." value={ personFirstName } onChange={ (e) =>  setPersonFirstName(e.target.value)} />
						<label htmlFor="first_name_id">First Name</label>
					</div>

					<div className="form-floating">
						<input type="text" id="last_name_id" className="form-control" placeholder="Last Name..." value={ personLastName } onChange={ (e) =>  setPersonLastName(e.target.value)} />
						<label htmlFor="last_name_id">Last Name</label>
					</div>

					<div className="form-floating">
						<input type="text" id="phone_number_id" className="form-control" placeholder="Phone Number..." value={ personPhone } onChange={ (e) =>  setPersonPhone(e.target.value)} />
						<label htmlFor="phone_number_id">Phone Number (+27)</label>
					</div>

					<div className="form-floating">
						<input type="text" id="email_address_id" className="form-control" placeholder="Email Address..." value={ personEmail } onChange={ (e) =>  setPersonEmail(e.target.value)} />
						<label htmlFor="email_address_id">Email Address</label>
					</div>
				</div>

				<button type="submit" className="btn btn-sm btn-success mx-auto w-100" style={{ maxWidth: "200px" }}>Submit</button>
			</form>
		</div>
	)
}
