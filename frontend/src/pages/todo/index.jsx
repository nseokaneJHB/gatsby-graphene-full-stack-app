import React from 'react';

// Components
import { LayoutComponent } from '../../components/LayoutComponent';
import { TodoWrapper } from '../../components/todo/TodoWrapper';

// Styling
import { todo__section } from '../../styles/todo.module.scss';

// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const TodoPage = () => {

	const client = new ApolloClient({
		uri: "http://127.0.0.1:8000/todo/graphql/",
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<LayoutComponent>
				<section className={ todo__section }>
					<h1 className="h1 text-center">Todo App</h1>
					<TodoWrapper />
				</section>
			</LayoutComponent>
		</ApolloProvider>
	)
}

export default TodoPage;

