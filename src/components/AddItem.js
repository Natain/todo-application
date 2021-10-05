import { HStack } from '@chakra-ui/layout';
import React, { useState } from 'react'
import {Input, Button } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useToast } from "@chakra-ui/react"



function AddItem({addItem}) {

    const toast = useToast();

    function handleSubmit(e){
        e.preventDefault();
        const todo = {
            id: nanoid(),
            body: task
        };

        if(task.length > 0){
            addItem(todo)
            setTask("")

        }

        else {
            toast({
                title: "Please enter a task",
                status: "error",
                duration: 2000,
                isClosable: true,
              })

        }

    }

    const [task, setTask] = useState("");
    return (
        <form onsubmit={handleSubmit}>
            <HStack paddingTop={8}>
                <Input colorScheme = "grey" value={task} onChange={(e) => setTask(e.target.value)} variant="outline" placeholder="Add new item..."/>
                <Button colorScheme="blue" px="8" type="submit" onClick={handleSubmit}>+ Add Task</Button>
            </HStack>
        </form>
    )
}

export default AddItem
