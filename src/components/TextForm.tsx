import React from "react";

interface Props {
  label?: string;
  type?: "live" | "new";
  setLabel?: any;
  placeholder?: string;
  setPlaceholder?: any;
}

function TextForm(props: Props) {
  const inputClass =
    "border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

  return (
    <div className={`flex flex-col ${props.type === "new" && "gap-1"}`}>
      <p>{props.label}</p>

      {props.type === "new" ? (
        <input
          onChange={(e) => props.setLabel(e.target.value)}
          className={inputClass}
          placeholder="Label of the field"
        />
      ) : (
        <input
          className={inputClass}
          type="text"
          placeholder={props.placeholder}
        ></input>
      )}
      {props.type === "new" && (
        <input
          onChange={(e) => props.setPlaceholder(e.target.value)}
          className={inputClass}
          placeholder="Placeholder of the field"
        />
      )}
    </div>
  );
}

export default TextForm;
