import { useState } from "react";
// import questions from "./Questions";
import questions from "./Question-V1";

export default function Play() {
  const [currentQuestion, setcurrentQuestion] = useState(0);

  // const [btnClicked, setBtnClicked] = useState(false);

  const handelNextBtnClick = () => {
    const nextQuestion = currentQuestion + 1;

    // const handelAnsBtnClick = () => {};

    setcurrentQuestion(nextQuestion);
  };
  return (
    <div className=" ">
      <div className="flex justify-between">
        <h3>
          Question <span className="font-bold"> {currentQuestion + 1}</span> /
          {questions.length}
        </h3>
        <h3>
          <span className="font-bold"> 1</span> / 280 Points
        </h3>
      </div>
      <div>
        <h3 className="my-6 ">
          <span className="font-bold">
            {questions[currentQuestion].question}
          </span>
        </h3>
        {questions[currentQuestion].answerOptions.answerText.map(
          (answerOption) => (
            // eslint-disable-next-line react/jsx-key
            <button className="my-2 w-full hover:bg-yellow-800 ">
              {answerOption}
            </button>
          )
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button>7:23</button>
        <button onClick={handelNextBtnClick}>Next</button>
      </div>
    </div>
  );
}
