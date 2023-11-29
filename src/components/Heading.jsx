import reactLogo from "../assets/react.svg";

export default function Heading() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1> The React Quiz </h1>
      </div>
    </>
  );
}
