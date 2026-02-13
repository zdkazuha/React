import React, { useContext, useState } from 'react'
import { CounterContext, CounterContext_2} from '../Contexts/counter.context';

export default function ToDoItem({ id, title, date, complete, important, removeFunction }) {
    const { value: value_1, setValue: setValue_1} = useContext(CounterContext);
    const { value: value_2, setValue: setValue_2} = useContext(CounterContext_2);
    const [status, setStatus] = useState(complete);

    function toggleStatus() {
        setStatus(!status);
        setValue_1(value_1 + (status ? 1 : -1));
        setValue_2(value_2 + (important === true &&  status ? 1 : -1));

    }

    return (
        <li onClick={toggleStatus} className={status ? "done" : ""}>
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