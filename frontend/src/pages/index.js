import * as React from "react"

export default function Home({ data }) {

	console.log(data)

	return (
		<div className="container">
			<h1 className="h1 text-center">Todo App</h1>

			<div className="card border-primary">
				<div className="card-body">
					<h4 className="card-title">Title</h4>
					<p className="card-text">Text</p>
				</div>
			</div>
		</div>
	)
}

export const query = graphql`
	query GetAllTasks{
		DJANGO {
			tasks {
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
