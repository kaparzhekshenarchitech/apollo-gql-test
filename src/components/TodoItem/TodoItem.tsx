import { FC } from "react";
import { Checkbox, CloseButton, HStack, Text } from "@chakra-ui/react";

import { TTodoItemProps } from "./types";

const TodoItem: FC<TTodoItemProps> = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
        onChange={() =>
          onToggle({
            variables: {
              id: id,
              completed: !completed,
            },
          })
        }
      />
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          onDelete({
            variables: {
              id,
            },
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
