import Card from "./Card";

function CardList({ list }) {
  return (
    <ul className="CardList">
      {list.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default CardList;
