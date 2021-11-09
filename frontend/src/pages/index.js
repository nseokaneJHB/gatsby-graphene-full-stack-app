import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import HelloWorld from "../components/hello";

export default function App() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/todo/graphql/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <HelloWorld />
    </ApolloProvider>
  );
}
