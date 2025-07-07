import React, { useContext, useState } from 'react'
import { CounterContext } from '../Contexts/counter.context';

export default function ToDoItem({ id, title, date, complete, important, removeFunction }) {
    const { value_1, setValue } = useContext(CounterContext);
    const [status, setStatus] = useState(complete);

    function toggleStatus() {
        setStatus(!status);
        setValue(value => value + (status ? 1 : -1));
    }

    return (
        <li onClick={toggleStatus} onDoubleClick={() => removeFunction(id)} className={status ? "done" : ""}>
            <input type="checkbox" checked={status} />
            {important ? <span className="important">!</span> : ""}
            {title ?? "No title"}
            <span className="deadline">{date || "01.04.2023"}</span>
            <button onClick={(e) => {
                e.stopPropagation();
                removeFunction(id, status);
            }}>Del</button>
        </li>
    );
}