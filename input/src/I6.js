import React,{ createContext , useState }from 'react';
import {Provider6} from './Context'
import I7 from './I7';

const I6 = () => {
    const [state, setstate] = useState("");
    const [color, setcolor] = useState("");
    const [date ,setdate] = useState("");
    // const con6= React.createContext()
    const onchange = (e) => {

        if(e.target.type=="color"){
            setcolor(e.target.value);
    }
    else{
        setdate(e.target.value)
    }
}
let obj = {
    onchange :onchange,
    color:color,
    date:date
}
  
    return (
        <div>
            <Provider6 value={obj}>
            <I7 />
            </Provider6>
        </div>
    )
}

export default I6
