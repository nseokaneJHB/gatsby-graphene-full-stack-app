import React from "react";
import { useQuery, gql } from "@apollo/client";

const HelloWorld = () => {
  const { loading, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;

  const renderList = () => {
    return data.tasks.map((task, index) => {
      console.log(task);
      return (
        <div className="card border-primary" key={index}>
          <div className="card-body">
            <h4 className="card-title">{task.title}</h4>
            <p className="card-text">
              {task.complete ? "WELL DONE!" : "DO IT YOU LAZY BONES!"}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="h1 text-center">Todo App</h1>
      {renderList()}
    </div>
  );
};

export const query = gql`
  query {
    tasks {
      id
      title
      description
      complete
    }
  }
`;

export default HelloWorld;
