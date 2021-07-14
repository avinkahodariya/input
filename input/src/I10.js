import React, { createContext, useState } from "react";
import { Provider10 } from "./Context";
import I0input from "./I0input";

const I10 = () => {
  const [state, setstate] = useState("");
  const [search, setsearch] = useState("");
  const [tel, settele] = useState("");
  // const con10= React.createContext()
  const onchange = (e) => {
    if (e.target.type == "search") {
      setsearch(e.target.value);
    } else {
      console.log(e);
      settele(e.target.value);
    }
  };
  let obj = {
    onchange: onchange,
    search: search,
    tel: tel,
  };

  return (
    <div>
      <Provider10 value={obj}>
        <I0input />
      </Provider10>
    </div>
  );
};

export default I10;
