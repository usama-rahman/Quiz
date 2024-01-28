import { useContext } from "react";
import { quizContext } from "../context";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useContext(quizContext);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong> {points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
