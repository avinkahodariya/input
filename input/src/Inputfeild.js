import React, { useContext } from "react";
import { Con1 } from "./Context";
import { Con2 } from "./Context";
import { Con4 } from "./Context";
import { Con5 } from "./Context";
import { Con6 } from "./Context";
import { Con7 } from "./Context";
import { Con8 } from "./Context";
import { Con9 } from "./Context";
import { Con10 } from "./Context";
import { Con3 } from "./Context";

const Inputfeild = (props) => {
  const C1 = useContext(Con1);
  const C2 = useContext(Con2);
  const C3 = useContext(Con3);
  const C4 = useContext(Con4);
  const C5 = useContext(Con5);
  const C6 = useContext(Con6);
  const C7 = useContext(Con7);
  const C8 = useContext(Con8);
  const C9 = useContext(Con9);
  const C10 = useContext(Con10);

  let acess = props.acess;

  const onchange = (acess, pr) => {
    if (acess == "1") {
      return [C1.onchange];
    }
    if (acess == "2") {
      return [C2.onchange];
    }
    if (acess == "3") {
      return [C3.onchange];
    }
    if (acess == "4") {
      return [C4.onchange];
    }
    if (acess == "5") {
      return [C5.onchange];
    }
    if (acess == "6") {
      return [C6.onchange];
    }
    if (acess == "7") {
      return [C7.onchange];
    }
    if (acess == "8") {
      return [C8.onchange];
    }
    if (acess == "9") {
      return [C9.onchange];
    }
    if (acess == "10") {
      return [C10.onchange];
    }
  };

  let r;
  const onclick = (acess, value) => {
    if (acess == "2") {
      if (value == "SUBMIT") {
        r = "submit";
      } else {
        r = "reset";
      }

      return [C2.onchange, r];
    }
    if (acess == "3") {
      if (value == "RED") {
        r = "RED";
      } else {
        r = "GREEN";
      }
      return [C3.onchange, r];
    }

    if (acess == "4") {
      if (value == "CRICKET") {
        r = C4.checkbox1;
      } else {
        r = C4.checkbox2;
      }
      return [C4.onchange, r];
    }
    if (acess == "5") {
      if (value == "BUTTON") {
        r = "BUTTON";
      } else {
        r = C5.file;
      }
      return [C5.onchange, r];
    } else {
      let a = "";
      return [a, a];
    }
  };
  let but = true;
  let v = props.type;
  let s = props.value;
  const value = (v, s) => {
    if (v == "text") {
      return C1.text;
    }
    if (v == "password") {
      console.log(C1.password);
      return C1.password;
    }
    if (v == "submit") {
      return C2.submit;
    }
    if (v == "reset") {
      return C2.reset;
    }
    if (v == "radio") {
      if (props.value == "RED") {
        s = props.value;

        return s;
      } else {
        s = props.value;

        return s;
      }
    }
    if (v == "checkbox") {
      if (props.value == "CRICKET") {
        return C4.checkbox1;
      }
      if (props.value == "TENIS") {
        return C4.checkbox2;
      }
    }
    if (v == "button") {
      return C5.button;
    }
    if (v == "file") {
      return C5.file;
    }
    if (v == "color") {
      return C6.color;
    }
    if (v == "date") {
      return C6.date;
    }
    if (v == "datetime-local") {
      return C7.datetime;
    }
    if (v == "email") {
      return C7.email;
    }
    if (v == "month") {
      return C8.month;
    }
    if (v == "number") {
      return C8.number;
    }
    if (v == "week") {
      return C9.week;
    }
    if (v == "url") {
      return C9.url;
    }
    if (v == "search") {
      return C10.search;
    }
    if (v == "tel") {
      return C10.tel;
    }
  };

  return (
    <div
      style={{
        border: "3px solid",
        borderRadius: "1em",
        width: "400px",
        background: "whitesmoke",
        margin: "10px",
      }}
    >
      <div style={{ margin: "30px" }}>
        <label
          style={{
            margin: "10px",
            border: "solid black",
            borderRadius: "1em",
            padding: "10px",
            display: "flex",
            maxWidth: " fit-content",
            alignContent: "center",
            backgroundColor: "black",
            color: "whitesmoke",
          }}
        >
          {props.value ? props.value.toUpperCase() : props.name.toUpperCase()}
        </label>
        <div
          style={{
            margin: "10px",
            border: "black",
            borderRadius: "1em",
            borderStyle: "solid",
            padding: "10px",
            display: "flex",
            maxWidth: "fit-content",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <input
            style={{ border: "3px solid", borderRadius: "1em" }}
            type={props.type}
            value={value(props.type, props.value)}
            name={props.name}
            onChange={onchange(props.acess)[0]}
            onClick={onclick(props.acess, props.value)[0]}
          />{" "}
          {onclick(props.acess, props.value)[1]}{" "}
        </div>
        <div
          style={{
            margin: "10px",
            border: "black",
            borderRadius: "1em",
            borderStyle: "solid",
            padding: "10px",
            display: "flex",
            maxWidth: "300px",
            alignContent: "center",
            textAlign: "center",
            backgroudcolor: "blue",
          }}
        >
          <h4 styles={{ border: "solid", borderRadius: "1em", padding: "5px" }}>
            {" "}
            {props.type.toUpperCase()} : {value(props.type, props.value)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Inputfeild;
