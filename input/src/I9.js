import React,{ createContext , useState }from 'react';
import {Provider9} from './Context'
import I10 from './I10';

const I9 = () => {
    const [state, setstate] = useState("");
    const [week, setweek] = useState("");
    const [url ,seturl] = useState("");
    // const con9= React.createContext()
    const onchange = (e) => {

        if(e.target.type=="week"){
            setweek(e.target.value);
    }
    else{
        seturl(e.target.value)
    }
}
let obj = {
    onchange :onchange,
    week:week,
    url:url
}
  
    return (
        <div>
           <Provider9 value={obj}>
               <I10 />
            </Provider9> 
        </div>
    )
}

export default I9
