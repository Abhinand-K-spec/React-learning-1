import { useReducer, useState } from "react";
import '../../src/index.css'


function reducer(state,action){
    switch(action.type){
        case 'add':
            return [...state,{text:action.payload,id:action.id}];
        case 'rem':
            return state.filter((item)=>item.id!==action.payload);
    }
}


function Todo(){

    const [state, dispatch] = useReducer(reducer,[]);
    const [inp, setInp] = useState('');
    return(<>
            <ul>
                {state.map((item)=>(
                    <li key={item.id}>{item.text}
                        <button onClick={()=>{dispatch({type:'rem',payload:item.id})}}>X</button>
                    </li>
                ))}
            </ul>
        
        <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}} name="" id="" />
        <button onClick={()=>{
            if(!inp.trim()) return;

            dispatch({
                type:'add',
                payload:inp,
                id:Date.now()
            })

            setInp('')
        }}> Add</button>
    </>)
}


export default Todo;