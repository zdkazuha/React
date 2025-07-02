export default function Review ({username, rating, comment, advantages, disadvantages, date}) {
    return ( 
        <>
            <li>
                <p className="user">
                    <span className="username">І'мя  користувача: {username}</span>
                    <span className="date">Дата: {date}</span>
                </p>
                <p>Оцінка: {rating}</p>
                <p>Коментар: {comment}</p>
                <p>Переваги: {advantages}</p>
                <p>Недоліки: {disadvantages}</p>
            </li>
        </>
     );
}
