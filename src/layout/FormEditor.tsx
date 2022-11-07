import { randomUUID } from "crypto";
import React from "react";
import SelectMenu from "../components/SelectMenu";
import TextForm from "../components/TextForm";
import Container from "./Container";
import { v4 as uuidv4 } from "uuid";
import DynamicForm from "../components/DynamicForm";

let FormJson = require("../FormJSON.json");

const selectMenuList = ["Text", "Select", "Radio"];

function FormEditor() {
  const [label, setLabel] = React.useState("");
  const [type, setType] = React.useState("Text");
  const [placeholder, setPlaceholder] = React.useState("");
  const [form, setForm] = React.useState(FormJson);

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
      setForm([...FormJson]);
      console.log("json", form);
      JsonMap();
    }
  }
  return (
    <body className="gap-4 flex  h-screen items-center justify-center w-screen">
      <div>
        <Container>
          <div>
            <h1>{placeholder}</h1>
            <SelectMenu
              label="Type of field"
              list={selectMenuList}
              setType={setType}
            />
            {type === "Text" && (
              <TextForm
                type="new"
                setLabel={setLabel}
                label={label}
                placeholder={placeholder}
                setPlaceholder={setPlaceholder}
              />
            )}
            <button
              className="bg-gray-100 rounded-md p-2 hover:bg-gray-200"
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
