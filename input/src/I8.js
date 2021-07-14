import React, { createContext, useState } from "react";
import { Provider8 } from "./Context";
import I9 from "./I9";

const I8 = () => {
  const [state, setstate] = useState("");
  const [month, setmonth] = useState("");
  const [number, setnumber] = useState("");
  // const con8= React.createContext()
  const onchange = (e) => {
    if (e.target.type == "month") {
      setmonth(e.target.value);
    } else {
      console.log(e);
      setnumber(e.target.value);
    }
  };
  let obj = {
    onchange: onchange,
    month: month,
    number: number,
  };

  return (
    <div>
      <Provider8 value={obj}>
        <I9 />
      </Provider8>
    </div>
  );
};

export default I8;
