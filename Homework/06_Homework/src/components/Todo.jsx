import { useEffect, useState } from "react";

export default function Todo({ todo, completed }) {
    return( 
        <>
            <li className={`Todo ${completed ? "complete deadline" : ""}`}>
                <p>{todo}</p>
            </li>
        </>
    );
}
