import Options from "./Options";
import { useContext } from "react";
import { quizContext } from "../context";

const Question = ({ question }) => {
  const { dispatch, answer } = useContext(quizContext);
  return (
    <div>
      <h4> {question.question} </h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
