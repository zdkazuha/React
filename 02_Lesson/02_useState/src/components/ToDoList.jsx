import React, { useContext, useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { CounterContext, CounterContext_2 } from '../Contexts/counter.context';

export default function ToDoList({ tasksList }) {
    const { value: value_1, setValue: setValue_1 } = useContext(CounterContext);
    const { setValue: setValue_2 } = useContext(CounterContext_2);
    const [list, setList] = useState(tasksList);
    
    useEffect(() => {
        const incompleteCount = tasksList.filter(t => !t.complete).length;
        setValue_1(incompleteCount);
        
        const importantCount = tasksList.filter(t => t.important && !t.complete).length;
        setValue_2(importantCount);
    }, [tasksList]);
    
    function removeItem(id, isComplete) {
        if (!isComplete) {
            setValue_1(prev => prev - 1);  
        }
        setList(prev => prev.filter(i => i.id !== id));
    }
    
    return (
        <>
            {list.length === 0 ? (
                <p>No tasks!</p>
            ) : (
                <ul className="todo_list">
                    {list.map(task => (
                        <ToDoItem key={task.id} {...task} removeFunction={removeItem} />
                    ))}
                </ul>
            )}
        </>
    );
}