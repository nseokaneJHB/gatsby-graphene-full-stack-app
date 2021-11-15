// Apollo
import { gql } from '@apollo/client';

// Get All Tasks
export const GetAllTasks_MUTATION = gql`
	query GetAllTasks{
		tasks {
			id
			title
			description
			complete
			dateCreated
			slug
		}
	}
`;

// Add New Task
export const AddNewTask_MUTATION = gql`
	mutation AddNewTask($title: String!){
		createTask(title: $title){
			task{
				id
				title
				complete
				description
				dateCreated
				slug
			}
		}
	}
`

// Mark Task Complete
export const ToggleComplete_MUTATION = gql`
	mutation ToggleComplete($slug: String, $complete: Boolean){
		updateTask(slug: $slug, complete: $complete){
			task{
				id
				title
				complete
				description
				dateCreated
				slug
			}
		}
	}
`

// Delete Task
export const DeleteTask_MUTATION = gql`
	mutation DeleteTask($slug: String){
		deleteTask(slug: $slug){
			task{
				id
			}
		}
	}
`