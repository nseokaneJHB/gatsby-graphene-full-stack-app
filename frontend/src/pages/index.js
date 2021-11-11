import * as React from "react";

// Styles
import { home__section, customer__card__body } from '../styles/home.module.scss';

// Components
import { Layout } from "../components/Layout";

// Gatsby
import { Link } from "gatsby";


export default function Home() {
	
	return (
		<Layout>
			<section className={ home__section }>
				<Link to="/todo" className="card">
					<div className={`card-body ${customer__card__body}`}>
						<h1 className="card-title">TODO APP</h1>
						<p className="card-text">This is where you can to write down and track your tasks.</p>
					</div>
				</Link>
				<Link to="/blog" className="card">
					<div className={`card-body ${customer__card__body}`}>
						<h1 className="card-title">BLOG APP</h1>
						<p className="card-text">This is where you get to write down your thoughts without being judged</p>
					</div>
				</Link>
			</section>
		</Layout>
	);
}