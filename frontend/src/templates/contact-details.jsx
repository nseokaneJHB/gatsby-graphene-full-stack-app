import React from 'react';

// Components
import { LayoutComponent } from '../components/LayoutComponent';

// Gatsby
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const ContactDetails = () => {
	return (
		<LayoutComponent>
			<div>
				<div>
					{/* <GatsbyImage image="https://icon-library.com/images/b2d9b8409e.png" alt="Some image"/> */}
				</div>
				<h1>Name</h1>
				<h2>Phone Number</h2>
				<h2>Email</h2>
			</div>
		</LayoutComponent>
	)
}
