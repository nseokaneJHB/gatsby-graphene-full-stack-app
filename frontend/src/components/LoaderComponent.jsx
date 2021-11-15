import React from 'react';

import { loader__container, loader } from '../styles/loader.module.scss';

export const LoaderComponent = ({ load_message }) => {
	return (
		<div className={ loader__container }>
			<div className={ loader }></div>
			<p>{ load_message }...</p>
		</div>
	)
}