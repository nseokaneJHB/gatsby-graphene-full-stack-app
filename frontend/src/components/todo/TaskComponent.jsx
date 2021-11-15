import React from 'react';

// Components
import { LoaderComponent } from '../LoaderComponent';

// Styling
import { task__wrapper, task__title__date, task__title, task__date, task__actions } from '../../styles/todo.module.scss';

// Apollo
import { useMutation } from '@apollo/client';

// Queries
import { GetAllTasks_MUTATION, DeleteTask_MUTATION, ToggleComplete_MUTATION } from '../../queries/todo_queries';

// Extra Functionality
import { FormatDate } from '../../utils/format';

export const TaskComponent = ({ task }) => {

	const [ DeleteTask, { loading } ] = useMutation(DeleteTask_MUTATION, {
		refetchQueries: [
			GetAllTasks_MUTATION,
		],
	});

	const [ ToggleTaskStatus ] = useMutation(ToggleComplete_MUTATION, {
		refetchQueries: [
			GetAllTasks_MUTATION,
		],
	});

	const toggleMyTask = (e) => {
		ToggleTaskStatus({ variables: { slug: e.slug, complete: !e.complete }});
	};

	const deleteMyTask = (e) => {
		DeleteTask({ variables: { slug: e.slug } });
	};

	return (
		<>
			{
				loading ? <LoaderComponent load_message={ `Deleting ${ task.title } Task` } />
				:
				(
					<div className={ `card ${ task.complete && "complete" }` }>
						<div className={ task__wrapper }>
							<div role="button" className={ `task ${ task__title__date }` } onClick={ () => toggleMyTask(task) } onKeyDown={ () => toggleMyTask(task) } tabIndex={ task }>
								<small className={ task__title }>{ task.title }</small>
								<small className={ task__date }><strong>Posted On:</strong> { FormatDate(task.dateCreated) }</small>
							</div>
							<div className={ task__actions }>
								<button type='button' className="btn btn-outline-danger btn-sm" onClick={ () => deleteMyTask(task) }>
									<svg width="14" height="14" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
										<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
									</svg>
								</button>
								{/* <button type='button' className="btn btn-outline-warning btn-sm">
									<svg width="14" height="14" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
										<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
										<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
									</svg>
								</button> */}
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}
