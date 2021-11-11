import React from 'react';

import { loader__container, loader } from '../styles/loader.module.scss';

export const Loader = () => {
	return (
		<div className={ loader__container }>
			<div className={ loader }></div>
			<p>Loading...</p>
		</div>
	)
}
