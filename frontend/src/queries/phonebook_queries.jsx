// Apollo
import { gql } from '@apollo/client';

// Get All Contacts
export const GetAllContacts_MUTATION = gql`
	query GetAllContacts {
		contacts{
			id
			name
			phone
			email
			dateCreated
			slug
		}
	}
`

// Add New Contact
export const AddNewContact_MUTATION = gql`
	mutation AddNewContact($name: String!, $phone: String!, $email: String!){
		createContact(name: $name, phone: $phone, email: $email){
			contact{
				id
				name
				phone
				email
				dateCreated
				slug
			}
		}
	}
`

// Update Contact
export const UpdateContact_MUTATION = gql`
	mutation UpdateContact($slug: String, $name: String, $phone: String, $email: String){
		updateContact(slug: $slug, name: $name, phone: $phone, email: $email){
			contact{
				id
				name
				phone
				email
				dateCreated
				slug
			}
		}
	}
`

// Delete Contact
export const DeleteContact_MUTATION = gql`
	mutation DeleteContact($slug: String){
		deleteContact(slug: $slug){
			contact{
				id
			}
		}
	}
`