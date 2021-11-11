import React from 'react';

// Styling
import { blog__section } from '../../styles/blog.module.scss';

// Components
import { Layout } from "../../components/Layout";

const Blog = () => {
	return (
		<Layout>
			<section className={ blog__section }>
				<h1>Blog Coming Soon!</h1>
			</section>
		</Layout>
	)
}

export default Blog
