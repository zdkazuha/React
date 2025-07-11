import { useState } from "react";

function Card({src, productDescription , reviews, inStock, price, discount }) {

    const icon_1 = "🛒";
    const[icon, setIcon] = useState(icon_1);
    
    function AddBoart () {
        if(icon === "🛒➕")
            setIcon("🛒");
        else
            setIcon(icon + "➕")
    }

    const icon_2 = "🤍";
    const[heart, setHeart] = useState(icon_2);
    function AddHeart() {
        if(heart === "🧡")
            setHeart("🤍");
        else
            setHeart("🧡")
    }

    return ( 
        <>
        <li>
            <div className="Card">
                <div className="Top">
                    <img className="Image" src={src} alt="" />
                    <p onClick={AddHeart} className="Heart"><span className="heart">{heart}</span></p>
                    <p className={discount === undefined ? "notDiscount" : "Discount"}>-{discount}%</p>
                </div>

                <div className="Bottom">
                    <p>{productDescription}</p>
                    <p>💬 {reviews === 0 ? "Залишити відгук" : `Кількість відгуків ${reviews}`}</p>
                    <p color={inStock ? "green" : "red"}>{inStock ? "Є в наявності" : "Немає в наявності"}</p>
                    <p className={discount === undefined ? "Price" : "OldPrice"} >{price} $</p>
                    <p className={discount === undefined ? "notDiscount" : "NewPrice"}>{price - (price * discount / 100)} $</p>
                </div>
                    <p onClick={AddBoart} className="Boart">{icon}</p>
            </div>
        </li>
        </>
    );
}

export default Card;