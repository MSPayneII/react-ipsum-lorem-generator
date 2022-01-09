import React, { useState } from "react";
import data from "./data";
function App() {
  const [paraCount, setParaCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = Number(paraCount);

    if (amount <= 0) {
      amount = 1;
    } else if (amount > 9) {
      amount = 9;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={paraCount}
          onChange={(e) => setParaCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="result">
        {text.map((paragraph, index) => {
          return <p key={index}> {paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
