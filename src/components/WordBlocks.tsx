import { useMemo } from "react";

type Props = {
  question: string[];
  answers: string[];
  showHint: boolean;
};

const WordBlocks = ({ question, answers, showHint }: Props) => {
  const results = useMemo(
    () => answers.map((char, index) => calcWordHint(char, index, question)),
    [answers, question]
  );

  return (
    <div className="word-block_wrapper">
      {showHint
        ? answers.map((char, index) =>
            results[index] === -1 ? (
              <span className="word-block_block incorrect">{char}</span>
            ) : results[index] === 0 ? (
              <span className="word-block_block contain">{char}</span>
            ) : (
              <span className="word-block_block correct">{char}</span>
            )
          )
        : answers.map((char) => (
            <span className="word-block_block">{char}</span>
          ))}
    </div>
  );
};

function calcWordHint(answer: string, index: number, question: string[]) {
  if (question[index] === answer) {
    return 1; // 完全一致
  } else if (question.includes(answer)) {
    return 0; // 含まれてる
  } else {
    return -1; // 不一致
  }
}

export default WordBlocks;
