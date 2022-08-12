import { gql } from "@apollo/client";

const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {
    newTodo: createTodo(
      title: $title
      user_id: $userId
      completed: $completed
    ) {
      id
      title
      completed
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

export { ADD_TODO, DELETE_TODO, UPDATE_TODO, ALL_TODO };
