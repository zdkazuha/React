import { useState } from "react";

function EagleOrTail() {
  const [text, setText] = useState("Натисни кнопку щоб підкинути монету");

  const Load = () => {
    const url = "https://www.random.org/coins/?num=1&cur=60-eur.ireland-1euro";

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const img = doc.querySelector("img[alt]");
        const result = img.getAttribute("alt");

        if (result === "reverse") {
            setText(`Результат: Орел`);
        } else {
            setText(`Результат: Решка`);
        }
      })
  };

  return (
    <>
      <p>{text}</p>
      <button onClick={Load}>Підкінути</button>
    </>
  );
}

export default EagleOrTail;
