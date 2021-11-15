import React from 'react';

// Components
import { TaskFormComponent } from './TaskFormComponent';
import { LoaderComponent } from '../LoaderComponent';
import { TaskComponent } from './TaskComponent';

// Styling
import { tasks__section, tasks__wrapper } from '../../styles/todo.module.scss';	

// Apollo
import { useQuery } from '@apollo/client';

// Queries
import { GetAllTasks_MUTATION } from '../../../../frontend1/src/queries/todo/todo_queries';


export const TodoWrapper = () => {

	const { loading, data } = useQuery(GetAllTasks_MUTATION);

	return (
		<>
			<TaskFormComponent />
			<section className={ tasks__section }>
				<div className={ tasks__wrapper }>
					{
						loading ? <LoaderComponent load_message={ `Loading` } /> 
						:
						(
							data.tasks.length && data.tasks.length > 0 
							?
							data.tasks.map(task =>
								<TaskComponent key={ task.id } task={ task } />
							)
							:
							<p className="font-monospace text-uppercase">You have not added any task yet</p>
						)
					}
				</div>
			</section>
		</>
	)
}
