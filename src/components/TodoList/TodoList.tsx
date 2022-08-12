import { FC } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { VStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import { ALL_TODO, DELETE_TODO, UPDATE_TODO } from "../../apollo/todos";
import TotalCount from "../TotalCount/TotalCount";
import TodoItem from "../TodoItem/TodoItem";
import { TTodoList } from "./types";

const TodoList: FC<TTodoList> = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);
  const [deleteTodo, { error: deleteError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(
              (todo) => todo.__ref !== `Todo:${removeTodo.id}`
            );
          },
        },
      });
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error || updateError || deleteError) {
    return <h2>Error...</h2>;
  }
  return (
    <>
      <VStack spacing={2} mt={4}>
        {data.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            {...todo}
          />
        ))}
      </VStack>
      <TotalCount />
    </>
  );
};

export default TodoList;
