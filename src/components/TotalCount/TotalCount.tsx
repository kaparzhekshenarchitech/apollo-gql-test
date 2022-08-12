import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { ALL_TODO } from "../../apollo/todos";
import { TTotalCount } from "./types";

const TotalCount: FC<TTotalCount> = () => {
  const { data } = useQuery(ALL_TODO);
  return (
    <div>
      <Flex justifyContent={"center"} borderTop={"2px"} mt="5">
        {data?.todos && <b>Total todos: {data.todos.length} </b>}
      </Flex>
    </div>
  );
};

export default TotalCount;
