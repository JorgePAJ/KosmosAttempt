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
    "bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-2 text-white placeholder-gray-200";

  return (
    <div className={`flex flex-col ${props.type === "new" && "gap-1"}`}>
      {props.type === "new" ? (
        <input
          onChange={(e) => props.setLabel(e.target.value)}
          className={inputClass}
          placeholder="Label of the field"
        />
      ) : (
        <div>
          <p>{props.label}</p>
          <input
            className={inputClass}
            type="text"
            placeholder={props.placeholder}
          ></input>
        </div>
      )}
      {props.type === "new" && (
        <input
          onChange={(e) => props.setPlaceholder(e.target.value)}
          className={inputClass + " mb-7"}
          placeholder="Placeholder of the field"
        />
      )}
    </div>
  );
}

export default TextForm;
