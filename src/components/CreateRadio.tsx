import React from "react";

interface Props {
  label: string;
  number: number;
  setList?: any;
  setNumber?: any;
  setLabel?: any;
}

function CreateRadio(props: Props) {
  const newList: any[] = [];
  function handleOptions(e: any, idx: number) {
    newList[idx] = e.target.value;
    console.log(newList);
  }
  const inputClass =
    "bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-2 text-white placeholder-gray-200 mb-2";

  return (
    <div className="flex flex-col">
      <input
        className={inputClass}
        placeholder="Label"
        onChange={(e) => props.setLabel(e.target.value)}
      />
      <input
        placeholder="Number of options"
        className={inputClass}
        type={"number"}
        min={2}
        max={10}
        onChange={(e) => props.setNumber(Math.round(Number(e.target.value)))}
      />
      {[...Array(props.number)].map((item, index) => {
        return (
          <input
            key={index}
            className={inputClass}
            placeholder={`Option ${index + 1}`}
            onChange={(e) => handleOptions(e, index)}
          />
        );
      })}
      <button
        className={
          inputClass +
          " transition-all duration-450 w-[50%] self-center  hover:bg-gray-500"
        }
        onClick={() => props.setList(newList)}
      >
        <p>Save options</p>
      </button>
    </div>
  );
}

export default CreateRadio;
