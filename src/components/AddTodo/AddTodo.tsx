import { FC } from "react";
import { FormControl } from "@chakra-ui/react";

import Add from "./components/Add/Add";

const AddTodo: FC = () => {
  return (
    <FormControl display={"flex"} mt={6}>
      <Add />
    </FormControl>
  );
};

export default AddTodo;
