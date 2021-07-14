import React, { createContext, useState } from "react";
import { Provider7 } from "./Context";
import I8 from "./I8";

const I7 = () => {
  const [state, setstate] = useState("");
  const [datetime, setdatetime] = useState("");
  const [email, setemail] = useState("");
  // const con7= React.createContext()
  const onchange = (e) => {
    console.log(e);
    if (e.target.type == "datetime-local") {
      console.log(e);
      setdatetime(e.target.value);
    } else {
      console.log(e.target.value);
      setemail(e.target.value);
    }
  };

  let obj = {
    onchange: onchange,
    datetime: datetime,
    email: email,
  };

  return (
    <div>
      <Provider7 value={obj}>
        <I8 />
      </Provider7>
    </div>
  );
};

export default I7;
