import { randomUUID } from "crypto";
import React from "react";
import SelectMenu from "../components/SelectMenu";
import TextForm from "../components/TextForm";
import Container from "./Container";
import { v4 as uuidv4 } from "uuid";
import DynamicForm from "../components/DynamicForm";
import CreateSelect from "../components/CreateSelect";
import RadioGroup from "../components/RadioGroup";
import CreateRadio from "../components/CreateRadio";

let FormJson = require("../FormJSON.json");

const selectMenuList = ["Text", "Select", "Radio"];

function FormEditor() {
  const [label, setLabel] = React.useState("");
  const [type, setType] = React.useState("Text");
  const [placeholder, setPlaceholder] = React.useState("");
  const [form, setForm] = React.useState(FormJson);
  const [number, setNumber] = React.useState(2);
  const [list, setList] = React.useState([]);

  function JsonMap() {
    return form.map((item: any) => {
      console.log("jsonmap");
      return (
        <TextForm label={item.label} type={item.type} setLabel={setLabel} />
      );
    });
  }

  function handleAdd() {
    {
      type === "Text" &&
        FormJson.push({
          component: "text",
          type: "text",
          label: label,
          placeholder: placeholder,
          _uid: uuidv4(),
        });
    }
    {
      type === "Select" &&
        FormJson.push({
          component: "select",
          type: "select",
          label: label,
          list: list,
          _uid: uuidv4(),
        });
    }
    {
      type === "Radio" &&
        FormJson.push({
          component: "radio",
          type: "radio",
          label: label,
          list: list,
          _uid: uuidv4(),
        });
    }
    setForm([...FormJson]);
    console.log("json", form);
    JsonMap();
    const JSONForm = JSON.stringify(form);
    const parsedForm = JSON.parse(JSONForm);
    console.log("parsed", parsedForm);
  }
  const inputClass =
    "transition-all duration-450 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 p-2 text-white placeholder-gray-200 hover:bg-gray-500";


  return (
    <body className="bg-gradient-to-bl from-white via-orange-200 to-violet-300 gap-4 sm:flex  h-screen items-center justify-center w-screen">
      <div>
        <Container>
          <div className="flex flex-col">
            <div className="mb-7">
              <SelectMenu
                label="Type of field"
                list={selectMenuList}
                setType={setType}
              />
            </div>
            {type === "Text" && (
              <TextForm
                type="new"
                setLabel={setLabel}
                label={label}
                placeholder={placeholder}
                setPlaceholder={setPlaceholder}
              />
            )}

            {type === "Select" && (
              <CreateSelect
                label={label}
                number={number}
                setNumber={setNumber}
                setList={setList}
                setLabel={setLabel}
              />
            )}

            {type === "Radio" && (
              <CreateRadio
                label={label}
                number={number}
                setLabel={setLabel}
                setNumber={setNumber}
                setList={setList}
              />
            )}

            <button
              className={inputClass + " w-[50%] self-center"}
              onClick={handleAdd}
            >
              <p>Add</p>
            </button>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div>
            <DynamicForm Form={form} />
          </div>
        </Container>
      </div>
    </body>
  );
}

export default FormEditor;
