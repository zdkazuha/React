import { useState } from "react";

function EagleOrTail() {
  const [text, setText] = useState("Натисни кнопку щоб підкинути монету");

  const [choice, setChoice] = useState('Standard');

  const Load = () => {
    const url = "https://www.random.org/coins/?num=1&cur=60-eur.ireland-1euro";

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const img = doc.querySelector("img[alt]");
        const result = img.getAttribute("alt");

        console.log(result); // "reverse" for heads, "observe" for tails
        
        if (choice === 'Standard') {
          setText(`Виберіть варіант`)
          console.log(result, choice);
          return;
        }
        
        if (result === choice) {
          console.log(result, choice);
            setText(`Ви вгадали! Результат: ${result === "reverse" ? "Орел" : "Решка"}`)
        } 
        else {
          console.log(result, choice);
          setText(`Ви не вгадали! Результат: ${result === "reverse" ? "Орел" : "Решка"}`)
        }
    }
    );
  }

  return (
    <>

      <p>{text}</p>

      <select value={choice} onChange={(e) => setChoice(e.target.value)}>
        <option value="Standard" disabled>Оберіть варіант</option>
        <option value="reverse">Орел</option>
        <option value="obverse">Решка</option>
      </select>

      <button onClick={Load}>Підкінути</button>
    </>
  );
}

export default EagleOrTail;