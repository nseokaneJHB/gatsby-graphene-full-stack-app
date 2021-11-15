import React from 'react';

// Styles
import { customer__card__body } from '../../styles/home.module.scss';

// Gatsby
import { Link } from 'gatsby';

// Utils
import { FormatDate } from '../../utils/format';

export const AppComponent = ({ app }) => {

	const { name, description, dateCreated, slug } = app

	return (
		<Link to={`/${ slug }`} className="card">
			<div className={`card-body ${customer__card__body}`}>
				<h1 className="card-title">{ name } APP</h1>
				<p className="card-text">{ description }</p>
				<small>Posted On: { FormatDate(dateCreated) }</small>
			</div>
		</Link>
	)
}
