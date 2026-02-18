import { useReducer, useState } from "react";


function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state, action.payload]
        case "remove":
            return state.filter((_,i)=> i!==action.payload)
        default:
            return state;
    }
}


function List(){
    const [state, dispatch] = useReducer(reducer, []);
    const [inp, setInp] = useState('');

    return(<>
        <h1>List</h1>
        <ul>
            {state.map((item,index)=>{
               return<> <li key={index}>{item}
                <button onClick={()=>dispatch({type:'remove',payload:index})}>x</button>
                </li>
                </>
            })}
        </ul>
            <input type="text" value={inp} onChange={(e)=>{setInp(e.target.value)}}  />
            <button onClick={()=>{dispatch({type:'add',payload:inp})}}>add</button>
    </>)

}

export default List;