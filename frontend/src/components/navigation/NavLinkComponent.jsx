import React from 'react';

// Gatsby
import { Link } from 'gatsby';

export const NavLinkComponent = ({ app }) => {
	return (
		<Link  className="nav-link" to={ `/${ app.slug }` }>{ app.name.toUpperCase() }</Link>
	)
}
