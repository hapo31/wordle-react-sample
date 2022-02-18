import "./App.scss";
import { useRef, useState } from "react";
import WordBlocks from "./components/WordBlocks";

function App() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [question] = useState("fucky".split(""));
  const [input, setInput] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="app">
      {answers.map((answer, index) => (
        <WordBlocks
          key={`${answer}-${index}`}
          answers={answer.split("")}
          question={question}
          showHint={true}
        />
      ))}

      <input
        className="answer-input"
        maxLength={5}
        ref={ref}
        onChange={(event) => {
          const { value } = event.target;
          setInput(value);
        }}
      />
      <button
        className="answer-button"
        onClick={() => {
          if (input.length !== 5) {
            return;
          }
          setAnswers([...answers, input]);
          if (ref.current) {
            ref.current.value = "";
          }
        }}
      >
        ANSWER
      </button>
    </div>
  );
}

export default App;
