import { useReducer } from "react";


function reducer(state, action){
    switch (action.type){
        case "increment":
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        case 'reset':
            return {count:state.count = 0}
        default:
            return state;
    }
}


function Counter(){

    const initialState = {count:0};

    const [state,dispatch] = useReducer(reducer,initialState);

    return(<>
        <h1>{state.count}</h1>
        <button onClick={()=>{dispatch({type:'decrement'})}}>-</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>R</button>
        <button onClick={()=>{dispatch({type:'increment'})}}>+</button>
    </>)
}
export default Counter;