import React, { useState } from 'react';

// Components
import { LoaderComponent } from '../LoaderComponent';

// Styling
import { todo__form } from '../../styles/todo.module.scss';

// Apollo
import { useMutation } from '@apollo/client';

// Queries
import { AddNewTask_MUTATION, GetAllTasks_MUTATION } from '../../../../frontend1/src/queries/todo/todo_queries';

export const TaskFormComponent = () => {

	const [title, setTitle] = useState("");

	const [ AddNewTask, { loading } ] = useMutation(AddNewTask_MUTATION, {
		refetchQueries: [
			GetAllTasks_MUTATION,
		],
	});

	const submitNewTask = (e) => {
		e.preventDefault()
		AddNewTask({ variables: { title } });
		setTitle("");
	};

	return (
		<>
			{
				loading ? <LoaderComponent load_message={ `Adding New Task` } /> 
				: 
				(
					<div className={ todo__form }>
						<form className="row g-2 align-items-center" onSubmit={ (e) => submitNewTask(e) }>
							<div className="col-9">
								<input type="text" className="form-control form-control-sm" placeholder="Title" value={ title } onChange={ (e) => setTitle(e.target.value) } />
							</div>
							<div className="col-3">
								<button type="submit" className="btn btn-success btn-sm">Submit</button>
							</div>
						</form>
					</div>
				)
			}
		</>
	)
}
