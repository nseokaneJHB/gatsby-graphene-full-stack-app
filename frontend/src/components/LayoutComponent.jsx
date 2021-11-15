import React from 'react';

// Components
import { NavbarComponent } from './navigation/NavbarComponent';

// Styling
import '../styles/global.scss';

export const LayoutComponent = ({ children }) => {
	return (
		<>
			<NavbarComponent />
			<div className="layout">
				<div className="container-fluid">
					{ children }
				</div>
			</div>
			<footer className="footer">
				<p>Copyright &copy; 2021</p>
			</footer>
		</>
	)
}
