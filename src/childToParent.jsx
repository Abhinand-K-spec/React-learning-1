import {useState} from 'react';



function Parent(){
    const [msg, setMsg] = useState();

    function recieveData(data){
        setMsg(data)
    }

    return(<>
    <Child sendData={recieveData}/>
    <h2>msg:{msg}</h2>
    </>)
}

function Child({sendData}){
    return(<button onClick={()=>sendData('hi fromm xhild')}>submit</button>)
}


export default Parent