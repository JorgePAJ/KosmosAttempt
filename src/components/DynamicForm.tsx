import React from "react";
import { json } from "stream/consumers";
import RadioGroup from "./RadioGroup";
import SelectMenu from "./SelectMenu";
import TextForm from "./TextForm";

interface Props {
  Form: {}[];
}

function DynamicForm(props: Props) {
  return (
    <div>
      {props.Form.map((item: any) => {
        return (
          <div>
            {item.type === "text" && (
              <TextForm label={item.label} type={item.type} placeholder={item.placeholder} />
            )}
          </div>
        );
      })}
      {props.Form.map((item: any) => {
        return (
          <div className="">
            {item.type === "select" && (
              <SelectMenu
                label={item.label}
                list={item.list}
                setType={() => {}}
              />
            )}
          </div>
        );
      })}
      {props.Form.map((item: any) => {
        return (
          <div className="">
            {item.type === "radio" && (
              <RadioGroup
                label={item.label}
                list={item.list}
                setType={() => {}}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DynamicForm;
