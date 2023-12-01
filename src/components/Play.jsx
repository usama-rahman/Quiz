export default function Play() {
  return (
    <div className="w-4/5 flex justify-center">
      <div className="w-full ml-9 items-center  ">
        <input
          type="range"
          className=" w-full cursor-pointer"
          min={0}
          max={15}
        />
      </div>
    </div>
  );
}
