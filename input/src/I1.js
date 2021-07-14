import React, { createContext, useState } from "react";
import I2 from "./I2";
import { Provider1 } from "./Context";

const I1 = () => {
  const [state, setstate] = useState("");
  const [password, setpassword] = useState("");
  const [text, settext] = useState("");
  //   const con1 = React.createContext();

  const onchange = (e) => {
    if (e.target.type == "text") {
      settext(e.target.value);
    } else {
      console.log(e.target.value);
      setpassword(e.target.value);
    }
  };

  const obj = {
    onchange: onchange,
    password: password,
    text: text,
  };

  return (
    <div>
      <Provider1 value={obj}>
        <I2 />
      </Provider1>
    </div>
  );
};

export default I1;
