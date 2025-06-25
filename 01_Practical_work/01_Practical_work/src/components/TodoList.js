import Task from "./Task";
import "../styles.css";
import { Fragment } from "react";

const todoList = [
  { id: 1, title: "Hit the gym", complete: false, date: "01.04.2023" },
  { id: 2, title: "Pay bills", complete: true, importantly: true },
  { id: 3, title: "Meet John", complete: false },
  {
    id: 4,
    title: "Buy eggs",
    complete: false,
    importantly: true,
    date: "29.03.2023",
  },
  { id: 5, title: "Read a book", complete: true },
  { id: 6, title: "Organize office", complete: false },
  { id: 7, title: "Eat dinner", complete: false },
  {
    id: 8,
    title: "Buy apples",
    complete: false,
    importantly: true,
    date: "05.03.2023",
  },
  { id: 9, title: "Meet George", complete: false, importantly: true },
  { id: 10, title: "Feed the cat", complete: false },
  { id: 11, title: "Write a letter", complete: true },
  { id: 12, title: "Run 1 km", complete: false, date: "15.01.2022" },
];

export default function TodoList() {
  return (
    <>
      <h2>My ToDo List</h2>
      <ul>
        <Task {...todoList[0]} />
        <Task {...todoList[1]} />
        <Task {...todoList[2]} />
        <Task {...todoList[3]} />
        <Task {...todoList[4]} />
        <Task {...todoList[5]} />
        <Task {...todoList[6]} />
        <Task {...todoList[7]} />
        <Task {...todoList[8]} />
        <Task {...todoList[9]} />
        <Task {...todoList[10]} />
        <Task {...todoList[11]} />
      </ul>
    </>
  );
}
