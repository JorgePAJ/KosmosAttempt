import React from "react";
import { json } from "stream/consumers";
import TextForm from "./TextForm";

interface Props {
  Form: {}[];
}

function DynamicForm(props: Props) {
  return (
    <div>
      {props.Form.map((item: any) => {
        return (
          <TextForm
            label={item.label}
            type="live"
            placeholder={item.placeholder}
          />
        );
      })}
    </div>
  );
}

export default DynamicForm;
