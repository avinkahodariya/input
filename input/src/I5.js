import React,{ createContext , useState }from 'react';
import {Provider5} from './Context'
import I6 from './I6';
const I5 = () => {
    const [state, setstate] = useState("");
    const [button, setbutton] = useState("");
    const [file ,setfile] = useState("");
    // const con5= React.createContext()
    const onchange = (e) => {

        if(e.target.type=="button"){
            setbutton("BUTTON");
    }
    else{
        setfile(e.target.value)
    }
}
let obj = {
    onchange : onchange,
    button:button,
    file:file
}
  
    return (
        <div>
            <Provider5 value={obj}>
            <I6/>
            </Provider5>
        </div>
    )
}

export default I5
