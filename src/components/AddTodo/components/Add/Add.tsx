import { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Input } from "@chakra-ui/react";

import { ADD_TODO, ALL_TODO } from "../../../../apollo/todos";
import { TAddProps } from "./types";

const Add: FC<TAddProps> = () => {
  const [text, setText] = useState("");
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    // refetchQueries: [{ query: ALL_TODO }],
    //! UPDATES THE ENTRIES LIST

    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODO });

      cache.writeQuery({
        query: ALL_TODO,
        data: {
          todos: [newTodo, ...todos],
        },
      });
    },
  });

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo({
        variables: {
          title: text,
          completed: false,
          userId: Date.now(),
        },
      });
      setText("");
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") handleAddTodo();
  };

  if (error) {
    return <h2>Error...</h2>;
  }
  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button ml={5} onClick={handleAddTodo}>
        Add Todo
      </Button>
    </>
  );
};

export default Add;
