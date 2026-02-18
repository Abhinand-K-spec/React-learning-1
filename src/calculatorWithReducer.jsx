

// const initialState = {
//     currentValue : '0',
//     previousValue : null,
//     operator : null,
//     overWrite : false

// }

// function reducer(state, action) {
//     switch (action.type) {
  
//       case "ADD_DIGIT":
//         if (state.overwrite) {
//           return {
//             ...state,
//             currentValue: action.payload,
//             overwrite: false
//           };
//         }
  
//         if (action.payload === "0" && state.currentValue === "0") {
//           return state;
//         }
  
//         return {
//           ...state,
//           currentValue:
//             state.currentValue === "0"
//               ? action.payload
//               : state.currentValue + action.payload
//         };
  
//       case "CHOOSE_OPERATOR":
//         if (state.currentValue == null) return state;
  
//         if (state.previousValue != null) {
//           return {
//             ...state,
//             previousValue: evaluate(state),
//             operator: action.payload,
//             currentValue: "0"
//           };
//         }
  
//         return {
//           ...state,
//           operator: action.payload,
//           previousValue: state.currentValue,
//           currentValue: "0"
//         };
  
//       case "EVALUATE":
//         if (
//           state.operator == null ||
//           state.previousValue == null
//         ) {
//           return state;
//         }
  
//         return {
//           ...state,
//           currentValue: evaluate(state),
//           previousValue: null,
//           operator: null,
//           overwrite: true
//         };
  
//       case "CLEAR":
//         return initialState;
  
//       default:
//         return state;
//     }
//   }
  


// function evaluate(state) {
//     const prev = parseFloat(state.previousValue);
//     const current = parseFloat(state.currentValue);
  
//     if (isNaN(prev) || isNaN(current)) return "";
  
//     let computation = "";
  
//     switch (state.operator) {
//       case "+":
//         computation = prev + current;
//         break;
//       case "-":
//         computation = prev - current;
//         break;
//       case "*":
//         computation = prev * current;
//         break;
//       case "/":
//         computation = prev / current;
//         break;
//       default:
//         return "";
//     }
  
//     return computation.toString();
//   }

//   import { useReducer } from "react";

// function Calculator() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>{state.currentValue}</h1>

//       <button onClick={() => dispatch({ type: "CLEAR" })}>
//         C
//       </button>

//       <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "1" })}>
//         1
//       </button>

//       <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "2" })}>
//         2
//       </button>

//       <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "3" })}>
//         3
//       </button>

//       <button onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "+" })}>
//         +
//       </button>

//       <button onClick={() => dispatch({ type: "EVALUATE" })}>
//         =
//       </button>
//     </div>
//   );
// }

// export default Calculator;



import { useReducer, useState } from "react"


function reducer(state,action){
    switch(action.type){
        case 'add':
            return {result:action.payload.a+action.payload.b}
        case 'subtract':
            return {result:action.payload.a-action.payload.b}
        default:
            return state;
    }
}


function Calculat(){
    const [state, dispatch] = useReducer(reducer, {result:0});
    const [inpA, setInpA] = useState('');
    const [inpB,setInpB] = useState('');
    const a = parseFloat(inpA)
    const b = parseFloat(inpB)

    return(<>
        <input type="text" value={inpA} onChange={(e)=>{setInpA(e.target.value)}}></input>
        <input type="text" value={inpB} onChange={(e)=>{setInpB(e.target.value)}}></input>

        <button onClick={()=>dispatch({type:'add',payload:{a,b}})}>add</button>
        <button onClick={()=>dispatch({type:'subtract',payload:{a,b}})}>subtract</button>

        <h1>{state.result}</h1>
    </>)
}

export default Calculat;