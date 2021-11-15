import React from 'react';

// Apollo
import { useQuery } from "@apollo/client";

// Queries
import { GetAllApps_MUTATION } from '../../queries/app_queries';

// Components
import { NavLinkComponent } from './NavLinkComponent';

export const NavLinksComponent = () => {

	const { loading, data } = useQuery(GetAllApps_MUTATION);

	return (
		<div className="navbar-nav ml-auto"> 
			{
				!loading && data.apps.length && data.apps.length > 0 && data.apps.map(app => <NavLinkComponent key={ app.id } app={ app } />)
			}
		</div>
	)
}
