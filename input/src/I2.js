import React,{ createContext , useState }from 'react';
import {Provider2} from './Context';
import I3 from './I3';

const I2 = () => {

    const [state, setstate] = useState("");
    const [submit, setsubmit] = useState("");
    const [reset, setreset] = useState("");
    // const con2 = React.createContext({});
    const onchange = (e) => {
          
        if(e.target.type=="submit"){
        setsubmit("submit");
    }
    else{
        setreset("reset")
    }
}

   let obj = {

           onchange:onchange,
           submit : submit,
           reset : reset


    }
    return (
        <div>
            <Provider2 value={obj}>
            <I3 />
            </Provider2>
        </div>
    )
}

export default I2
