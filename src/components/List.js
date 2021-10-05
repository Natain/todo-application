import React from "react";
import { HStack, VStack, Text, StackDivider, Spacer, Badge } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";


function List({todoItems, deleteItem}) {
 

  if(!todoItems.length){
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todos!
      </Badge>
    )
  }
  return (
      
      <VStack divider={<StackDivider/>}  paddingBottom="0" borderColor="gray.100" borderWidth="2px" borderRadius="lg" padding="5" width="100%" maxW={{base: "90vw", sm: "70vw", md: "60vw", lg: "50vw"}} alignItems="stretch">
        {todoItems.map((todo) => (
            <>
          <HStack key={todo.id} >
            <Text>{todo.body}</Text>    
            <Spacer/>
            <IconButton icon={<DeleteIcon/>} onClick={() => deleteItem(todo.id)} isRound="true"/>
          </HStack>
          </>
        ))}
      </VStack>
  
  );
}

export default List;
