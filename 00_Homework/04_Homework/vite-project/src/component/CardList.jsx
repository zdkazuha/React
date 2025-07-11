import { useState } from "react";
import Card from "./Card";
import CreateCard from "./CreateCard";

export default function CardList({ list }) {

  const [cardList, setList] = useState(list);

  function createCard(card) {
      const newId = cardList.length > 0 ? Math.max(...cardList.map(i => i.id)) + 2 : 1;
      cardList.id = newId;
      setList([...cardList, card]);
  }


  return (
    <div>
      <CreateCard onCreate={createCard} />

      <ul className="CardList">
        {cardList.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
}