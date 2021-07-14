import React,{ createContext , useState }from 'react';
import { Provider4 } from './Context'
import I5 from './I5';

const I4 = () => {
    const [state, setstate] = useState("");
    const [checkbox1, setcheckbox1] = useState("");
    const [checkbox2, setcheckbox2] = useState("");
    // const con4= React.createContext()
    const onchange = (e) => {

if(e.target.name=="CRICKET"){
        if(e.target.checked==true){
            setcheckbox1(e.target.name);
          
    }
else{
    setcheckbox1("")
}}
         if(e.target.name=="TENIS")   {
            if(e.target.checked==true) {
        setcheckbox2(e.target.name)}
    else{
        setcheckbox2("")
    }}
    
}
let obj = {
    onchange: onchange,
    checkbox1:checkbox1,
    checkbox2:checkbox2
}
    return (
        <div>
            <Provider4 value={obj}>
            <I5 />
            </Provider4>
        </div>
    )
}

export default I4
