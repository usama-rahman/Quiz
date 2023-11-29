import reactLogo from "../assets/react.svg";
// import reactLogo from "././assets/react.svg";
export default function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1> React Quiz </h1>
      </div>
      <div>
        <h2 className="mt-7">Welcome to react Quiz</h2>
        <h3 className="mt-7">15 Question to test your react mastary</h3>
        <button className="mt-8">Let&apos;s Start !</button>
      </div>
    </>
  );
}
