import { useState } from "react";

export default function ToDoItem({ id, title, date, complete, important, removeFunction }) {

    // { state } allows component to automatically re-render when changed
    const [status, setStatus] = useState(complete);

    function toggleStatus() {
        // complete = !complete;
        // status = !status;
        setStatus(!status);

        // alert("Statis: " + status)
    }

    return (
        <li onClick={toggleStatus} onDoubleClick={() => removeFunction(id)} className={status ? "done" : ""}>
            <input type="checkbox" checked={status} />
            {important ? <span className="important">!</span> : ""}
            {title ?? "No title"}
            <span class="deadline">01.04.2023</span>
            <button onClick={() => removeFunction(id)}>Del</button>
        </li>
    );
}
