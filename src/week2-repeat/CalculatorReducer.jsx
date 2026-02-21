import React, { useReducer, useState } from 'react'
import { useTheme } from './contextCounter/ThemeContext';


function reducer(state, action){
    switch(action.type){
        case 'add':
            return {...state,result:action.payload.a+action.payload.b};
        default:
            return state;

    }
}

const CalculatorReducer = () => {

    const[inp1, setInp1] = useState('');
    const [inp2,setInp2] = useState('');

    const [state,dispatch] = useReducer(reducer,{});
    const {theme,dispatchTheme}= useTheme();

  return (
    <div>
        <button onClick={()=>{dispatchTheme({type:'Toggle'})}}>Toggle </button>
        <h1>current:{theme}</h1>
      <h1>{state.result}</h1>
      <input type="number" value={inp1} onChange={(e)=>{setInp1(e.target.value)}} name="" id="" />
      <input type="number" value={inp2} onChange={(e)=>{setInp2(e.target.value)}} name="" id="" />
      <button onClick={()=>{
        dispatch({type:'add',payload:{a:Number(inp1),b:Number(inp2)}})

        setInp1('');
        setInp2('');
        
        }}>add</button>
    </div>
  )
}

export default CalculatorReducer
