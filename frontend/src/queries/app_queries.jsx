import { gql } from '@apollo/client';

// Get All Apps
export const GetAllApps_MUTATION = gql`
	query GetAllApps{
		apps{
			id
			name
			description
			dateCreated
			slug
		}
	}  
`