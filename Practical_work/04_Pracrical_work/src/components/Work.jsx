export default function Work({title , age, src}) {
    return (
        <li className="image">
            <img src={src} alt="" />
            <p>{title}</p>
            <p>{age}</p>
        </li>
    );
}
