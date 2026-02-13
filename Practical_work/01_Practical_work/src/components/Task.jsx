export default function Task({ title, complete, importantly, date }) {
  return (
    <li className={`Task ${complete ? "complete deadline" : ""}`}>
      <label>
        <input type="checkbox" checked={complete}/>
        {importantly !== undefined ? " ! " : ""} {title}
      </label>

      <span className={date !== undefined ? "Date" : ""}>
        {date !== undefined ? date : ""}
      </span>
    </li>
  );
}
