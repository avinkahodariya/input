import React, { useState } from "react";
import Inputfeild from "./Inputfeild";

const I0input = () => {
  const type_name = [
    {
      type: "text",
      name: "TEXT",
      acess: "1",
      value: "",
    },
    {
      type: "password",
      name: "PASSWORD",
      acess: "1",
      value: "",
    },
    {
      type: "submit",
      name: "SUBMIT",
      acess: "2",
      value: "SUBMIT",
    },
    {
      type: "reset",
      name: "RESET",
      acess: "2",
      value: "RESET",
    },
    {
      type: "radio",
      name: "RADIO",
      value: "RED",
      acess: "3",
      checked: "false",
      defaultChecked: true,
    },
    {
      type: "radio",
      name: "RADIO",
      value: "GREEN",
      checked: "false",
      acess: "3",
    },
    {
      type: "checkbox",
      name: "CRICKET",
      value: "CRICKET",
      acess: "4",
    },
    {
      type: "checkbox",
      name: "TENIS",
      value: "TENIS",
      acess: "4",
    },
    {
      type: "button",
      name: "BUTTON",
      acess: "5",
      value: "BUTTON",
    },
    {
      type: "file",
      name: "FILE",
      acess: "5",
      value: "",
    },
    {
      type: "color",
      name: "COLOUR",
      acess: "6",
      value: "color",
    },
    {
      type: "date",
      name: "DATE",
      acess: "6",
      value: "date",
    },
    {
      type: "datetime-local",
      name: "DATE-TIME",
      acess: "7",
      value: "datetime",
    },
    {
      type: "email",
      name: "EMAIL",
      acess: "7",
      value: "email",
    },
    {
      type: "month",
      name: "MONTH",
      acess: "8",
      value: "month",
    },
    {
      type: "number",
      name: "NUMBER",
      acess: "8",
      value: "number",
    },
    {
      type: "url",
      name: "URL",
      acess: "9",
      value: "url",
    },
    {
      type: "week",
      name: "WEEK",
      acess: "9",
      value: "week",
    },
    {
      type: "search",
      name: "SEARCH",
      acess: "10",
      value: "search",
    },
    {
      type: "tel",
      name: "TELEPHONE",
      acess: "10",
      value: "TELE",
    },
  ];
  return (
    <div>
      {type_name.map((e) => {
        return (
          <Inputfeild
            name={e.name}
            type={e.type}
            acess={e.acess}
            value={e.value}
            defaultChecked={e.defaultChecked}
          />
        );
      })}
    </div>
  );
};

export default I0input;
