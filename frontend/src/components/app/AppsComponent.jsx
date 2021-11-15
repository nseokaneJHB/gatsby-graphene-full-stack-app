import React from 'react';

// Components
import { AppComponent } from './AppComponent';
import { LoaderComponent } from '../LoaderComponent';

// Styles
import { home__section } from '../../styles/home.module.scss';

// Apollo
import { useQuery } from "@apollo/client";

// Queries
import { GetAllApps_MUTATION } from '../../../../frontend1/src/queries/apps/app_queries';

export const AppsComponent = () => {
	const { loading, data } = useQuery(GetAllApps_MUTATION);

	return (
		<section className={ home__section }>
			{
				loading ? <LoaderComponent />
				:
				data.apps.length && data.apps.length > 0 ? data.apps.map(app =>
					<AppComponent key={ app.id } app={ app } />
				)
				:
				<p>There are no apps at the moment</p>
			}
		</section>
	)
}
