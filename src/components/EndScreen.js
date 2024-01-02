export default function EndScreen({
  points,
  maxPossiblePoints,
  dispatch,
  highscore,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "💰";
  if (percentage >= 0 && percentage < 100) emoji = "😊";
  if (percentage === 0) emoji = "🤦‍♀️";

  return (
    <>
      <p className="result">
        <span> {emoji} </span> Your Scored <strong> {points} </strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> Highscore: {highscore} points </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
