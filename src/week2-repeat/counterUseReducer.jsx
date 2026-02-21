import { useReducer } from "react";


function reducer(state,action){

    switch(action.type){
        case 'increment':
            return (state.count+1);
        case 'decrement':
            return (state.count-1);
        case 'reset':
            return (state.count=0);
    }

}

function Counter(){

    const [state,dispatch] = useReducer(reducer,{count:0});
    return(<>
    <h1>{state.count}</h1>
    <button onClick={()=>{dispatch({type:'increment'})}}>+</button>
    <button onClick={()=>{dispatch({type:'rest'})}}>reset</button>
    <button onClick={()=>{dispatch({type:'decrement'})}}>-</button>

    </>)
}

export default Counter;