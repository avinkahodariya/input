import React, { createContext, useState } from "react";
import { Provider3 } from "./Context";
import I4 from "./I4";

const I3 = () => {
  const [state, setstate] = useState("");
  const [radio, setradio] = useState("");

  //    const con3  = React.createContext();

  const onchange = (e) => {
    console.log(e);

    if (e.target.value == "RED") {
      console.log("reeeed");
      setradio("RED");
    } else {
      console.log("greeeeeen");
      setradio("GREEN");
    }
  };
  let obj = {
    onchange: onchange,
    radio: radio,
  };
  return (
    <div>
      <Provider3 value={obj}>
        <I4 />
      </Provider3>
    </div>
  );
};

export default I3;
