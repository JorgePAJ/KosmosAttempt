import React from "react";

interface Props {
  label: string;
  list: string[];
  setType: any;
}

function SelectMenu({ label, list, setType }: Props) {
  return (
    <div>
      <label className="font-thin block text-xl mb-2 text-center text-gray-700">
        {label}
      </label>
      <div className="flex items-center justify-center">
        <select
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 text-center p-1 text-white"
        >
          {list.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectMenu;
