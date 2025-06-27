import { useState } from "react";

export default function Film({rating , src}) {

    const [star, setRating] = useState(rating);

    function updateRating() {
        setRating(star => {
            if (star >= 10) {
                return 1;
            }
            return star + 1;
        });
    }

    return (
        <li className="image">
            <img src={src} alt="" />
            <p onClick={updateRating}><span color="gold">IMDb  ★</span>
            <span style={{ color: star >= 8.5 ? "gold" : "black" }}>{star}</span>
            <span color="gray">/10</span></p>
        </li>
    );
}
