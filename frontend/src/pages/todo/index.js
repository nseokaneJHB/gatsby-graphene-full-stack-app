import React from 'react';

// Styling
import { todo__section } from '../../styles/todo.module.scss';

// Components
import { Layout } from "../../components/Layout";
import { TaskForm } from '../../components/todo/TaskForm';
import  Tasks from '../../components/todo/Tasks';

export default function Todo() {
	return (
		<Layout>
			<section className={ todo__section }>
				<h1 className="h1 text-center">Todo App</h1>
				<TaskForm />
				<Tasks />
			</section>
		</Layout>
	)
}


