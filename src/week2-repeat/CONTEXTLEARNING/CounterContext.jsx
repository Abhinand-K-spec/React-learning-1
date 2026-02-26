import { createContext, useContext, useReducer } from "react";





const CounterContext = createContext();


function reducer(state,action){
    switch(action.type){
        case 'inc':
            return {count:state.count+1};
        case 'dec':
            return {count:state.count-1};
        default:
            return state;
    }
}

export function CounterLearningProvider({children}){
    const [state,dispatch] = useReducer(reducer,{count:0});

    return(
        <CounterContext.Provider value={{state,dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}

export function useLearningCounter(){
    return useContext(CounterContext)
}