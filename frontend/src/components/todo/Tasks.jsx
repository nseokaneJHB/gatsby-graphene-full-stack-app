import React from "react";

// Styling
import { tasks__section, tasks__wrapper } from '../../styles/todo.module.scss';

// Components
import Task from "./Task";
import { Loader } from "../Loader";

// Apollo
import { gql, useQuery } from "@apollo/client";

const Tasks = () => {
	const { loading, data } = useQuery(GetAllTasks);

	return (
		<section className={ tasks__section }>
			{
				loading 
			? 
				<Loader /> 
			:
				data.tasks.length && data.tasks.length > 0
				?
				<div className={ tasks__wrapper }>
					{
						data.tasks.map(task => (
							<Task key={task.id} task={ task } />
						))
					}
				</div>
				:
				<p>You Don't Have Tasks At The Moment</p>
			}
		</section>
	);
};

export const GetAllTasks = gql`
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

export default Tasks;