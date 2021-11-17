// Path
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

	const { data } = await graphql(`
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
	`);

	console.log(data);

	data?.contacts.forEach(contact => {
		console.log(contact);
		// actions.createPage({
		// 	path: `/phone-book/${ contact.slug }`,
		// 	component: `${ path.resolve('./src/templates/contact-details.jsx') }`,
		// 	context: { slug: contact.slug }
		// })
	});
}	