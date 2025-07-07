import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 2;

  function Load() {
    fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`)
      .then(response => response.json())
      .then(data => {

        setList(prevList => [...prevList, ...data.todos]);
        setSkip(prevSkip => prevSkip + limit);
      })
  }

  return (
    <>
        <button onClick={Load}>Load More</button>
        <ul className="TodoList">
          {list.map(i => (
            <Todo key={i.id} {...i} />
          ))}
        </ul>
    </>
  );
}

export default TodoList;
