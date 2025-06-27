import { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasksList }) {

    const [list, setList] = useState(tasksList);

    function removeItem(id) {
        // list = list.filter(i => i.id !== id);
        setList(list.filter(i => i.id !== id));
    }

    return (
        <>
            {
                list.length === 0 ?
                    <p>No tasks!</p>
                    :
                    <ul class="todo_list">
                        {list.map(task => <ToDoItem {...task} removeFunction={removeItem} />)}
                    </ul>
            }
        </>
    );
}
