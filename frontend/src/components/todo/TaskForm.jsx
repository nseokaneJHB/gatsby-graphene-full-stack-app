import React, { useState } from 'react';

// Styling
import { todo__form } from '../../styles/todo.module.scss';

// Apollo
import { gql, useMutation } from "@apollo/client";

export const TaskForm = () => {

	const [ task, setTask ] = useState("")
	const [ AddTask ] = useMutation(AddNewTask_MUTATION);

	const submitNewTask = (e) => {
		e.preventDefault();
		AddTask({ variables: { title: task } })
		setTask('');
	}

	return (
		<div className={ todo__form }>
			<form className="row g-2 align-items-center" onSubmit={ (e) => submitNewTask(e) }>
				<div className="col-9">
					<input type="text" className="form-control form-control-sm" placeholder="Title" onChange={ (e) => setTask(e.target.value) } />
				</div>
				<div className="col-3">
					<button type="submit" className="btn btn-success btn-sm">Submit</button>
				</div>
			</form>
		</div>
	)
}

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